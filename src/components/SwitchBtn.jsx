import React from "react";

const SwitchBtn = (props) => {
  // console.log(props.modess);
  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={props.modeBoolean}
        />
      </div>
    </div>
  );
};

export default SwitchBtn;
