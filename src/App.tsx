import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 w-48 rounded-2xl shadow-md bg-white">
      <h2 className="text-lg font-bold mb-3 text-gray-700">⏱ Timer</h2>
      <p className="text-3xl font-mono text-blue-600">{count}</p>
    </div>
  );
}

export default App;
