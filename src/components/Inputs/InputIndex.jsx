import React from "react";
import InputFields from "./InputFields";
import PropTypes from "prop-types";

const InputIndex = ({ inputs, handleChange }) => {
  return (
    <div>
      <h2 className="text-xl mb-2">Inputs</h2>
      <InputFields name="a" value={inputs.a} onChange={handleChange} />
      <br />
      <InputFields name="b" value={inputs.b} onChange={handleChange} />
    </div>
  );
};

InputIndex.prototype = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputIndex;
