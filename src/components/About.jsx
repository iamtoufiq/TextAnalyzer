import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const About = (props) => {
  const [modes, setModes] = useState({
    color: "black",
    backgroundColor: "white",
  });

  useEffect(() => {
    if (props.modess) {
      setModes({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setModes({
        color: "white",
        backgroundColor: "black",
      });
    }
  }, [props.modess]);

  return (
    <>
      <Navbar
        ourTitle="TextAnalyzer"
        aboutOurApp="AboutApp"
        modeBoolean={props.modeBoolean}
        modess={props.modess}
      />
      <div className="container my-3" style={modes}>
        <h1>AboutApp</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={modes}
              >
                <strong>Check your content</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modes}>
                check your content You may rapidly and effectively analyse your
                text using TextAnalyzer, whether you want to find its word
                count, character count, convert it to uppercase, lowercase, or
                capitalise it, remove extra spaces, copy the text, or clean the
                content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={modes}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modes}>
                The free character counter application TextAnalyzer offers a
                quick character count and word statistics for a given text.
                TextAnalyzer provides word and character counts, making it
                suited for text with word character limits.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={modes}
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={modes}>
                Any web browser, including Chrome, Firefox, blogs, books, excel
                papers, PDF documents, essays, etc. can use this word counting
                software.
              </div>
            </div>
          </div>
        </div>
        <button type="button" className={`btn btn-${modes.btnColor} my-2`}>
          {modes.btnName}
        </button>
      </div>
    </>
  );
};

export default About;
