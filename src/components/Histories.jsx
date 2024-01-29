import React from "react";

const Histories = ({ histories, handleRestore, restoredHistory }) => {
  return (
    <div className="text-center mt-10">
      {histories.length === 0 ? (
        <h1>You have no history</h1>
      ) : (
        histories.map((history) => (
          <div key={history.id} className="mb-5 border py-2">
            <h3 className="text-xl">
              This operation <br /> {history.inputs.a} {history.operator} {history.inputs.b} ={" "}
              {history.result}
            </h3>
            <small>{history?.date?.toLocaleDateString()}</small>
            <br />
            <button
              className="btn btn-sm btn-outline bg-green-100 text-black"
              onClick={() => handleRestore(history)}
              disabled={restoredHistory == history.id}
            >
              Restore
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Histories;
