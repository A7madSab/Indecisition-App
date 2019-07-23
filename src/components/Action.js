import React from "react";

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      // disabled={props.setButtonStatus()}
    >
      What should I do ?
    </button>
  </div>
);

export default Action;
