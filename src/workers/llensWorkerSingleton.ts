let _worker: Worker | null = null;
let _isReady = false;
let _loadRequested = false;

const createWorker = (): Worker => {
  const worker = new Worker(new URL("./llens.worker.ts", import.meta.url), {
    type: "module",
  });
  worker.addEventListener("message", (event: MessageEvent) => {
    if (event.data?.type === "ready") {
      _isReady = true;
    }
  });
  worker.addEventListener("error", () => {
    // Worker died — reset so the next ensureWorker() call rebuilds it
    _worker = null;
    _isReady = false;
    _loadRequested = false;
  });
  return worker;
};

const ensureWorker = (): Worker => {
  if (!_worker) {
    _worker = createWorker();
  }
  return _worker;
};

/** Start loading the model now. Safe to call multiple times. */
export const preloadLlensModel = () => {
  if (_loadRequested && _worker) return;
  _loadRequested = true;
  const worker = ensureWorker();
  worker.postMessage({ type: "load" });
};

/** Get (or create) the shared worker instance. */
export const getLlensWorker = (): Worker => ensureWorker();

/** True if the worker has already emitted "ready" before a component mounted. */
export const isLlensModelReady = (): boolean => _isReady;

/** Force-reset the singleton (e.g. after an unrecoverable error). */
export const resetLlensWorker = () => {
  _worker?.terminate();
  _worker = null;
  _isReady = false;
  _loadRequested = false;
};
