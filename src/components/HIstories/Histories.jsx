import React from "react";
import Button from "../Buttons/Button";
import Proptypes from "prop-types";

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
            <Button
              text="Restore"
              onClick={() => handleRestore(history)}
              disabled={restoredHistory !== null && restoredHistory === history.id}
            />
          </div>
        ))
      )}
    </div>
  );
};

Histories.prototype = {
  histories: Proptypes.array.isRequired,
  handleRestore: Proptypes.func.isRequired,
  restoredHistory: Proptypes.func.isRequired,
};

export default Histories;
