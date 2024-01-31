import React from "react";
import PropTypes from "prop-types";

const HeaderSection = ({ result }) => {
  return (
    <>
      <h1 className="text-3xl mb-4">
        Hello my dear... <br />
        <span className="text-purple-600">Faria Jannat</span> <br />
        <span className="text-2xl">This is your mini calculator</span>
      </h1>
      <div className="px-20 py-4 rounded-lg bg-white font-bold">{result}</div>
    </>
  );
};

HeaderSection.prototype = { result: PropTypes.number.isRequired };

export default HeaderSection;
