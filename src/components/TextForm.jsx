import React, { useState } from "react";

export default function TextForm({ mode }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handelUpClick = (e) => {
    e.preventDefault();
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handelLoClick = (e) => {
    e.preventDefault();
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = (e) => {
    e.preventDefault();
    const newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
  };
  const CapitalizeWord = (e) => {
    e.preventDefault();
    // const newText = text
    //   .toLowerCase()
    //   .split(" ")
    //   .map((word) => word[0].toUpperCase() + word.substring(1))
    //   .join(" ");
    // setText(newText);

    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 0; i <= text.length - 1; i++) {
      let currentchar,
        prevchar = text[i - 1];
      if (prevchar && prevchar === "") {
        currentchar = text[i].toUpperCase();
      } else {
        currentchar = text[i];
      }
      CapitalizeWords = CapitalizeWords + currentchar;
    }
    setText(CapitalizeWords);
  };
  const removeXtraSpace = () => {
    const newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  return (
    <>
      <h1
        className="mb-2"
        style={{ color: mode === "light" ? "#212529" : "white" }}
      >
        Try TextUtils Word counter, Character counter, Remove Extra Spaces
      </h1>

      <div className={`container mb-3`}>
        <textarea
          value={text}
          className="form-control"
          id="myBox"
          rows="6"
          style={{
            backgroundColor: mode === "light" ? "white" : "#212529",
            color: mode === "light" ? "#212529" : "white",
          }}
          onChange={handleChange}
        >
          {text}
        </textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2  mx-1"
          onClick={handelUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 "
          onClick={handelLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={CapitalizeWord}
        >
          Capitalize word
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeXtraSpace}
        >
          Remove Extra space
        </button>
      </div>
      <div
        className="container"
        style={{ color: mode === "light" ? "#212529" : "white" }}
      >
        <p>
          {/* text === "" ? "0" : text.trim().split(" ").length */}
          {
            text.split(" ").filter((element) => element.length !== 0).length
          }{" "}
          Words {text.trim().length} Characters
        </p>
        <h1>Preview</h1>
        <p>{text.length ? text : "Nothing to preview... "}</p>
      </div>
    </>
  );
}
