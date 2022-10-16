import React from "react";

const Alerts = (props) => {
  const capitalizedFunction = (onlyOneWord) => {
    let oneWord = onlyOneWord[0].toUpperCase() + onlyOneWord.substring(1);
    return oneWord;
  };
  console.log(props.myAlert);
  return (
    <div
      style={{ height: "3.2rem", textAlign: "center", alignContent: "center" }}
    >
      {props.myAlert && (
        <div
          className={`alert alert-${props.myAlert.status} alert-dismissible fade show`}
          role="alert"
          style={{ height: "3rem" }}
        >
          <strong>
            {capitalizedFunction(props.myAlert.status)} : {props.myAlert.msg}
          </strong>
        </div>
      )}
    </div>
  );
};

export default Alerts;
