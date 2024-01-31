import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, disabled, customStyle }) => {
  const styles = `btn btn-outline bg-green-100 text-black ${customStyle ? customStyle : ""}`;

  return (
    <button className={styles} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  customStyle: PropTypes.string,
};

export default Button;
