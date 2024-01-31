import React from "react";
import PropTypes from "prop-types";

const InputFields = ({ type, name, onChange, value }) => {
  return (
    <div>
      <input
        className="bg-white border p-2"
        type="number"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputFields.prototype = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputFields;
