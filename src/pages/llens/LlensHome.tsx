import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const fallbackTokenize = (value: string) => value.match(/\s+|[^\s]+/g) ?? [];

export default function LlensHome() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [predictions, setPredictions] = useState<{ token: string; prob: number }[]>([]);
  const [tokens, setTokens] = useState<string[]>(fallbackTokenize(text));
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const [isModelReady, setIsModelReady] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [maxNewTokens, setMaxNewTokens] = useState(5);
  const [temperature, setTemperature] = useState(0.8);
  const workerRef = useRef<Worker | null>(null);

  const tokensMemo = useMemo(() => tokens, [tokens]);

  const createWorker = () => {
    const worker = new Worker(new URL("../../workers/llens.worker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (event) => {
      const message = event.data as
        | { type: "ready" }
        | { type: "tokenized"; tokens: string[]; tokenIds: number[] }
        | { type: "predictions"; predictions: { token: string; prob: number }[] }
        | { type: "generated"; text: string; tokens: string[]; tokenIds: number[] }
        | { type: "error"; message: string };

      if (message.type === "ready") {
        setIsModelReady(true);
        setIsModelLoading(false);
        setErrorMessage(null);
        worker.postMessage({ type: "tokenize", text });
        return;
      }

      if (message.type === "tokenized") {
        setTokens(message.tokens);
        setTokenIds(message.tokenIds);
        return;
      }

      if (message.type === "predictions") {
        setPredictions(message.predictions);
        setIsWorking(false);
        return;
      }

      if (message.type === "generated") {
        setText(message.text);
        setTokens(message.tokens);
        setTokenIds(message.tokenIds);
        setSelectedIndex(null);
        setPredictions([]);
        setIsWorking(false);
        return;
      }

      if (message.type === "error") {
        setErrorMessage(message.message);
        setIsModelLoading(false);
        setIsWorking(false);
      }
    };

    workerRef.current = worker;
    return worker;
  };

  useEffect(() => {
    const worker = createWorker();
    setIsModelLoading(true);
    worker.postMessage({ type: "load" });

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isModelReady || !workerRef.current) {
      setTokens(fallbackTokenize(text));
      return;
    }

    const timeout = window.setTimeout(() => {
      workerRef.current?.postMessage({ type: "tokenize", text });
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [text, isModelReady]);

  const handleGenerate = () => {
    if (!workerRef.current || !isModelReady) return;
    setIsWorking(true);
    workerRef.current.postMessage({ type: "generate", text, maxNewTokens, temperature });
  };


  const handleTokenClick = (index: number) => {
    setSelectedIndex(index);
    if (!workerRef.current || !isModelReady || tokenIds.length === 0) {
      setPredictions([]);
      return;
    }
    setIsWorking(true);
    const contextIds = tokenIds.slice(0, index + 1);
    workerRef.current.postMessage({ type: "predict", tokenIds: contextIds, k: 5 });
  };

  const handleRetry = () => {
    if (!workerRef.current || isModelLoading) return;
    setIsModelLoading(true);
    setErrorMessage(null);
    workerRef.current.postMessage({ type: "load" });
  };

  const renderTokenContent = (token: string) => {
    return Array.from(token).map((char, index) => {
      if (char === " ") {
        return (
          <span
            key={`space-${index}`}
            className="inline-block h-2.5 w-2.5 rounded-full bg-orange-200 ring-1 ring-orange-300/70"
            aria-hidden="true"
          />
        );
      }

      if (char === "\n") {
        return (
          <span
            key={`newline-${index}`}
            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-1 ring-orange-200"
            aria-label="newline"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3">
              <path
                d="M6 8h8a4 4 0 0 1 0 8H9m0 0 3-3m-3 3 3 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        );
      }

      if (char === "\t") {
        return (
          <span
            key={`tab-${index}`}
            className="inline-flex items-center text-[10px] font-semibold text-orange-400"
          >
            ⇥
          </span>
        );
      }

      return (
        <span key={`char-${index}`} className="text-foreground">
          {char}
        </span>
      );
    });
  };

  const selectedToken = selectedIndex === null ? null : tokensMemo[selectedIndex];
  const selectedContext = selectedIndex === null ? "" : tokensMemo.slice(0, selectedIndex + 1).join("");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-30 group">
        <div className="h-8" />
        <div className="opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Rakan Tutor
          </Link>
        </div>
        <div className="h-px w-full bg-border" />
        </div>
      </div>

      <main className="relative pt-12">
        <section className="pt-28 pb-14 px-4 md:px-6">
          <div className="container max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
              LLMs • Tokenization • Generation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4 tracking-tight font-display">
              LLens Playground
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore how language models break text into tokens and choose the next token.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-6 pb-24">
          <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h2 className="text-xl md:text-2xl font-semibold">Step 1 — Input</h2>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Tokens</span>
                        <Input
                          type="number"
                          min={1}
                          max={50}
                          value={maxNewTokens}
                          onChange={(event) => setMaxNewTokens(Number(event.target.value) || 1)}
                          className="w-20 text-center"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Temp</span>
                        <Input
                          type="number"
                          min={0}
                          max={1}
                          step={0.05}
                          value={temperature}
                          onChange={(event) => {
                            const next = Number(event.target.value);
                            if (Number.isNaN(next)) {
                              setTemperature(0);
                              return;
                            }
                            setTemperature(Math.min(1, Math.max(0, next)));
                          }}
                          className="w-20 text-center"
                        />
                      </div>
                      <Button onClick={handleGenerate} disabled={!isModelReady || isWorking}>
                        {isWorking ? "Working..." : "Generate"}
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="min-h-[120px] text-base"
                    placeholder="Type context here..."
                  />
                  <p className="text-sm text-muted-foreground">
                    Tokens are colored and clickable below. The model loads automatically and runs locally in your browser.
                  </p>
                  {errorMessage && (
                    <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      <p className="mb-2">{errorMessage}</p>
                      <button
                        type="button"
                        className="text-xs uppercase tracking-[0.35em] text-destructive underline"
                        onClick={handleRetry}
                      >
                        Retry loading
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Step 2 — Interactive Tokens</h2>
                <div className="flex flex-wrap gap-1 leading-loose">
                  {tokensMemo.map((token, index) => {
                    const isSelected = index === selectedIndex;
                    const bg = index % 2 === 0 ? "bg-sky-100/70 dark:bg-sky-900/30" : "bg-amber-100/70 dark:bg-amber-900/30";
                    return (
                      <button
                        key={`${token}-${index}`}
                        type="button"
                        onClick={() => handleTokenClick(index)}
                        className={`rounded-md border px-2 py-1 text-sm font-mono transition ${bg} ${isSelected ? "border-primary text-primary" : "border-border/60 text-foreground"}`}
                      >
                        <span className="inline-flex flex-wrap items-center gap-0.5">
                          {renderTokenContent(token)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Step 3 — Top‑K Predictions</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {selectedIndex === null
                    ? "Click a token to see next‑token probabilities."
                    : `Context ending with “${selectedToken}”`}
                </p>

                {selectedIndex !== null && (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-xs font-mono text-muted-foreground">
                      {selectedContext}
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-border/60">
                      <table className="w-full text-sm">
                        <thead className="bg-muted/60 text-muted-foreground">
                          <tr>
                            <th className="px-3 py-2 text-left">Rank</th>
                            <th className="px-3 py-2 text-left">Token</th>
                            <th className="px-3 py-2 text-left">Probability</th>
                            <th className="px-3 py-2 text-left">Confidence</th>
                          </tr>
                        </thead>
                        <tbody>
                          {predictions.map((prediction, idx) => (
                            <tr key={`${prediction.token}-${idx}`} className="border-t border-border/60">
                              <td className="px-3 py-2">{idx + 1}</td>
                              <td className="px-3 py-2 font-mono">'{prediction.token}'</td>
                              <td className="px-3 py-2">{(prediction.prob * 100).toFixed(2)}%</td>
                              <td className="px-3 py-2">
                                <div className="h-2 w-full rounded-full bg-muted">
                                  <div
                                    className="h-2 rounded-full bg-primary"
                                    style={{ width: `${Math.round(prediction.prob * 100)}%` }}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8 shadow-sm text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Frontend GPT‑2 (small)</p>
                <p>
                  The model loads directly in your browser with a one‑time download. Once loaded, predictions run locally with greedy decoding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
