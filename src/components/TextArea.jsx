import React, { useEffect, useState } from "react";

const TextArea = (props) => {
  const [text, setText] = useState("");

  const [textmodes, settextModes] = useState({
    color: "white",
    backgroundColor: "#2b2626c9",
  });

  console.log(".....");

  useEffect(() => {
    console.log("helo re render in textarea. jsx");
    if (props.modess) {
      settextModes({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      console.log("helo re render.....");
      settextModes({
        color: "white",
        backgroundColor: "#2b2626c9",
      });
    }
  }, [props.modess]);

  const upperCaseConvert = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been converted into UpperCase", "success");
  };
  const lowerCaseConvert = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted into lowerCase", "success");
  };
  const copyHandle = () => {
    const text1 = document.getElementById("exampleFormControlTextarea1");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Text has been copied", "success");
  };
  const clearHandle = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const handleCapitalize = () => {
    props.showAlert("Text has been Capitalized", "success");
    let newText = text.split(/[ ]+/).join(" ").trim(); //this remove extra spaces and trim the text also.
    // console.log(newText);
    //from here our capitalize funcciton will come into picture.
    const words = newText.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    setText(words.join(" "));
  };

  const removeExtraSpaces = () => {
    // we have one more method to do using regex
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };
  const handleOnOnChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            style={textmodes}
            placeholder="Enter the text to be analyzed here...."
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          disabled={text === "" ? true : false}
          onClick={upperCaseConvert}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          disabled={text === "" ? true : false}
          className="btn btn-primary mx-1 my-1"
          onClick={lowerCaseConvert}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          disabled={text === "" ? true : false}
          onClick={handleCapitalize}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          disabled={text === "" ? true : false}
          onClick={copyHandle}
        >
          Copy
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          disabled={text === "" ? true : false}
          onClick={clearHandle}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          disabled={text === "" ? true : false}
          onClick={removeExtraSpaces}
        >
          remove Extra Spaces
        </button>
        <hr />
      </div>

      <div className="container">
        <h1>Your text review</h1>
        <p>
          Your text has{" "}
          {
            text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        {/* <p>
          Your text has {text === "" ? 0 : text.trim().split(" ").length} words
          and {text.length} characters.
        </p> */}
        <strong>
          <p>
            {text === "" ? 0 : text.split(/\s+/).length * 0.008}minutes to read
          </p>
        </strong>
        <h3>Preview </h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextArea;
