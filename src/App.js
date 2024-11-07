import React, { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(input1 + input2);

  return (
    <div>
      <h1>Calculadora Simple</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(parseFloat(e.target.value))}
      />
      <div>
        <button onClick={handleAddition}>Sumar</button>
      </div>
      <h2>Resultado: {result}</h2>
    </div>
  );
}
