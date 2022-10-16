import React, { useState } from "react";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import Alerts from "./Alerts";

const HomePage = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      status: status,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div>
      <Navbar
        ourTitle="TextAnalyzer"
        aboutOurApp="AboutApp"
        modeBoolean={props.modeBoolean}
        modess={props.modess}
      />
      <Alerts myAlert={alert} />
      <TextArea
        heading="Enter the text to analyze"
        modeBoolean={props.modeBoolean}
        modess={props.modess}
        showAlert={showAlert}
      />
    </div>
  );
};

export default HomePage;
