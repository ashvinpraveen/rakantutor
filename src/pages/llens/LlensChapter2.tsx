import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fallbackTokenize = (value: string) => value.match(/\s+|[^\s]+/g) ?? [];

const chapter = {
  number: "02",
  title: "How LLM's Generate",
};

const chapterTwoIntro =
  "LLM's generate text by simply looking at the tokens it has, and try to predict the next token! Let's see that in action through a guessing game!";

const chapterTwoContext =
  "When Mary and John went to the store, Mary handed the bag to";

const chapterTwoPredictions = [
  { token: "John", probability: 44.11, confidence: 0.84 },
  { token: "the", probability: 8.89, confidence: 0.24 },
  { token: "them", probability: 7.3, confidence: 0.2 },
  { token: "her", probability: 6.82, confidence: 0.18 },
  { token: "Mary", probability: 4.92, confidence: 0.12 },
];

export default function LlensChapter2() {
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [chapterTwoStep, setChapterTwoStep] = useState(0);

  const chapterTwoTokens = useMemo(() => fallbackTokenize(chapterTwoContext), []);
  const chapterTwoOptions = useMemo(
    () => chapterTwoPredictions.map((prediction) => prediction.token),
    []
  );
  const chapterTwoAnswer = useMemo(() => {
    if (!selectedPrediction) return null;
    return (
      chapterTwoOptions.find((option) => option !== selectedPrediction) ??
      chapterTwoOptions[0]
    );
  }, [chapterTwoOptions, selectedPrediction]);

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link
            to="/"
            className="text-base font-semibold uppercase tracking-[0.35em] text-muted-foreground"
          >
            Rakan Tutor
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/llens/chapter-1"
              className="text-sm uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition"
            >
              Previous Chapter
            </Link>
            <Link
              to="/llens"
              className="text-sm uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition"
            >
              Skip to Playground
            </Link>
          </div>
        </div>
        <div className="h-px w-full bg-border" />
      </div>

      <div className="pt-24">
        <section className="relative min-h-[calc(100vh-96px)] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div
                className={`transition-all duration-700 ease-out ${
                  chapterTwoStep === 0
                    ? "lg:basis-full lg:max-w-4xl lg:mx-auto text-center"
                    : "lg:basis-2/5 lg:max-w-none lg:mx-0 text-left"
                }`}
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.45em] text-muted-foreground">
                    Chapter {chapter.number}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-semibold">{chapter.title}</h1>
                </div>

                <div className="relative min-h-[280px]">
                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      chapterTwoStep === 0
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-border/60 bg-card/85 p-7 shadow-sm space-y-5">
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {chapterTwoIntro}
                      </p>
                      <Button
                        size="lg"
                        className="rounded-full px-8"
                        onClick={() => setChapterTwoStep(1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      chapterTwoStep === 1
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-border/60 bg-card/85 p-7 shadow-sm space-y-5">
                      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                        Question
                      </p>
                      <p className="text-xl font-semibold">
                        Which do you think is the next generated token?
                      </p>
                      <div className="grid gap-3">
                        {chapterTwoOptions.map((option) => (
                          <Button
                            key={option}
                            variant={selectedPrediction === option ? "default" : "outline"}
                            className="justify-start text-base"
                            onClick={() => setSelectedPrediction(option)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                      {chapterTwoAnswer && (
                        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-base text-amber-900 dark:text-amber-200">
                          <span className="font-semibold">WRONG</span>, the answer is
                          <span className="mx-2 rounded-full bg-amber-300/30 px-3 py-1 text-sm font-semibold">
                            {chapterTwoAnswer}
                          </span>
                          because models don&apos;t necessarily predict the highest
                          probability token!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-700 ease-out lg:basis-3/5 ${
                  chapterTwoStep === 1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 pointer-events-none lg:basis-0 lg:max-w-0 lg:overflow-hidden"
                }`}
              >
                <div className="rounded-3xl border border-border/60 bg-card/90 p-8 md:p-10 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                      Context
                    </p>
                    <div className="rounded-2xl border border-border/60 bg-background/60 px-5 py-4 text-base md:text-lg text-foreground">
                      {chapterTwoContext}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                      Static Tokens
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {chapterTwoTokens.map((token, idx) => (
                        <span
                          key={`${token}-${idx}`}
                          title={JSON.stringify(token)}
                          className="rounded-xl border border-border/60 bg-background/70 px-3 py-1.5 text-sm md:text-base"
                        >
                          <span className="inline-flex flex-wrap items-center gap-0.5">
                            {renderTokenContent(token)}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                      Top-K Predictions
                    </p>
                    <div className="grid gap-3">
                      {chapterTwoPredictions.map((prediction, idx) => (
                        <div
                          key={`${prediction.token}-${idx}`}
                          className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/70 px-5 py-4 md:flex-row md:items-center md:justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                              {idx + 1}
                            </span>
                            <span className="text-lg font-semibold">
                              &quot;{prediction.token}&quot;
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-base text-muted-foreground">
                              {prediction.probability.toFixed(2)}%
                            </span>
                            <div className="h-2 w-28 rounded-full bg-muted/60">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${prediction.confidence * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button size="lg" className="rounded-full px-10" asChild>
                <Link to="/llens">Enter the Playground</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
