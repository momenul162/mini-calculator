import React, { useState } from "react";
import randomId from "react-id-generator";
import Histories from "./components/Histories";

/**
 * DONE: Hndle user Input field,
 * DONE: Handle operators,
 * DONE: Hndle list of histories,
 * DONE: Render history list,
 * DONE: Restore the history,
 */

const initialState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleOperator = (operator) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }
    const calculate = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`
    );
    const result = calculate(operator);
    setResult(result);

    // setResult(eval(` ${inputState.a} ${operator} ${inputState.b}`));

    const historyItem = {
      id: randomId() + 99 + 1011,
      result,
      inputs: { ...inputState },
      operator,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleClear = () => {
    setInputState({ ...initialState });
    setResult(30);
  };

  const handleRestore = (history) => {
    setInputState({ ...history.inputs });
    setResult(history.result);
    setRestoredHistory(history.id);
  };

  return (
    <div>
      <div className="px-2 md:w-1/2 mx-auto text-center bg-slate-200 md:px-10 py-10  md:py-20 shadow-lg rounded-lg">
        <h1 className="text-3xl mb-4">
          Hello my dear... <br />
          <span className="text-purple-600 ">Faria Jannat</span> <br />
          <span className="text-2xl">This is your mini calculator</span>
        </h1>
        <div className="px-20 py-4 rounded-lg bg-white font-bold">{result}</div>
        <div className="flex items-center gap-10 justify-center">
          <div>
            <h2 className="text-xl mb-2">Inputs</h2>
            <input
              className="bg-white border p-2"
              type="number"
              name="a"
              value={inputState.a}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              className="bg-white border p-2"
              type="number"
              name="b"
              value={inputState.b}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center mt-4">
            <button
              className="btn btn-outline bg-green-100 text-black"
              onClick={() => handleOperator("+")}
            >
              +
            </button>
            <button
              className="btn btn-outline bg-green-100 text-black"
              onClick={() => handleOperator("-")}
            >
              -
            </button>
            <button
              className="btn btn-outline bg-green-100 text-black"
              onClick={() => handleOperator("*")}
            >
              *
            </button>
            <button
              className="btn btn-outline bg-green-100 text-black"
              onClick={() => handleOperator("/")}
            >
              /
            </button>
            <button
              className="btn btn-outline bg-green-100 text-black"
              onClick={() => handleOperator("%")}
            >
              %
            </button>
            <button className="btn btn-outline bg-green-100 text-black" onClick={handleClear}>
              AC
            </button>
          </div>
        </div>
      </div>
      <Histories
        histories={histories}
        handleRestore={handleRestore}
        restoredHistory={restoredHistory}
      ></Histories>
    </div>
  );
};

export default App;
