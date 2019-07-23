import React from "react";
import OptionInfo from "./OptionInfo.";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-headr__title">Your Option</h3>
        <button
          className="button button--link"
          onClick={props.handelDeleteOptions}
        >
          Delete All
        </button>
      </div>
      {props.options.length === 0 ? (
        <p className="widget-message">Add New items</p>
      ) : (
        <div>
          {props.options.map((option, index) => (
            <OptionInfo
              key={option}
              index={index + 1}
              option={option}
              handelDeleteOption={props.handelDeleteOption}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Options;
