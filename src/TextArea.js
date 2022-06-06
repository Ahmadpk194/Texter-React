import { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("Enter Text here");

  function handlerUpper() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Transformed to Uppercase", "success");
  }
  function handlerLower() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Transformed to Lowercase", "success");
  }

  function changeHandler(event) {
    setText(event.target.value);
  }

  function clearField(event) {
    const newText = "";
    setText(newText);
    props.showAlert("Field Cleared", "success");
  }

  function revText(event) {
    let revText = text.split("").reverse().join("");
    setText(revText);
    props.showAlert("Text Reversed", "success");
  }

  function handleCopy() {
    let text = document.getElementById("textAreaBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3 py-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.title}
          </label>
          <textarea
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(59, 59, 59)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={changeHandler}
            value={text}
            className="form-control"
            id="textAreaBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handlerUpper}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlerLower}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={clearField}>
            Clear Field
          </button>
          <button className="btn btn-primary mx-2" onClick={revText}>
            Reverse Text
          </button>
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>

      <div
        className="container pb-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your Text summary</h4>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>
          {text.split(".").length - 1} &nbsp;
          {text.split(".").length > 1 ? "Sentenses" : "Sentense"}
        </p>
        <p>{0.008 * text.split(" ").length} Munutes to read</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter Text to Preview here!"}</p>
      </div>
    </>
  );
}

export default TextArea;
