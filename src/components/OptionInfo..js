import React from "react";

const OptionInfo = props => (
  <div className="option">
    <p className="  ">
      {props.index}) {props.option}
    </p>

    <button
      className="button button--link"
      onClick={() => {
        props.handelDeleteOption(props.option);
      }}
    >
      Delete this Option
    </button>
  </div>
);

export default OptionInfo;
