import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-4 border rounded w-40 text-center">
      <h2 className="text-lg font-bold mb-2">Timer</h2>
      <p className="text-xl">{count}</p>
    </div>
  );
}

export default App;
