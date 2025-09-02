import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const reset = () => setCount(0);

  return (
    <div className="p-6 w-64 rounded-2xl shadow-lg bg-white text-center">
      <h2 className="text-lg font-bold mb-4 text-gray-700">⏱ Timer</h2>
      <p className="text-4xl font-mono text-blue-600 mb-4">{count}</p>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setRunning((prev) => !prev)}
          className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
