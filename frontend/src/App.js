import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculate = async () => {
    try {
      const response = await axios.post("/api/add", { numbers: input });
      setResult(response.data.result);
    } catch (error) {
      setResult(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter numbers" />
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
