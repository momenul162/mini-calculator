import React from "react";
import Button from "../Buttons/Button";
import PropTypes from "prop-types";

const Operation = ({ handleOperator, handleClear }) => {
  return (
    <div className="grid grid-cols-2 gap-3 justify-center mt-4">
      <Button text="+" onClick={() => handleOperator("+")} />
      <Button text="-" onClick={() => handleOperator("-")} />
      <Button text="*" onClick={() => handleOperator("*")} />
      <Button text="/" onClick={() => handleOperator("/")} />
      <Button text="%" onClick={() => handleOperator("%")} />
      <Button text="**" onClick={() => handleOperator("**")} />
      <Button customStyle="w-full" text="AC" onClick={handleClear} />
    </div>
  );
};

Operation.prototype = {
  handleOperator: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Operation;
