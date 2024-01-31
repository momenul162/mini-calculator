import React, { useState } from "react";
import randomId from "react-id-generator";
import Histories from "./components/HIstories/Histories";
import Swal from "sweetalert2";
import InputIndex from "./components/Inputs/InputIndex";
import Operation from "./components/Operation/Operation";
import HeaderSection from "./components/HeaderSection/HeaderSection";

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
      Swal.fire("Invalid Input");
      return;
    }

    const calculate = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`
    );

    const result = calculate(operator);
    setResult(result);

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
    setResult(0);
  };

  const handleRestore = (history) => {
    setInputState({ ...history.inputs });
    setResult(history.result);
    setRestoredHistory(history.id);
  };

  return (
    <div>
      <div className="px-2 md:w-1/2 mx-auto text-center bg-slate-200 md:px-10 py-10  md:py-20 shadow-lg rounded-lg">
        <HeaderSection result={result} />

        <div className="flex items-center gap-10 justify-center">
          <InputIndex inputs={inputState} handleChange={handleChange} />

          <Operation handleOperator={handleOperator} handleClear={handleClear} />
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
