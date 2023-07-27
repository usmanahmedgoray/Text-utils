import React, { useState } from "react";

export default function TextForm(props) {
  // Create a useState hook for the text input
  const [text, setText] = useState("");
  // Create a useState hook for the button text 
  const [btnText, setbtnText] = useState("Convert to UpperCase");
  // Create a Function to handle the textarea change

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  /* Create a Function to handle the button click of UpperCase
  and lowerCase*/

  const ToogleClickChange = () => {
    // Add new Box Text and  new button text
    let newText;
    let newBtnText;
    // Create a logic to change the button text
    if (btnText === "Convert to UpperCase") {
      newText = text.toUpperCase();
      newBtnText = "Convert to LowerCase";
      setbtnText(newBtnText);
      setText(newText);
      // Adding props to show the Alert
      props.showAlert("Converted to UpperCase","success");
    } else {
      newText = text.toLowerCase();
      newBtnText = "Convert to UpperCase";
      setbtnText(newBtnText);
      setText(newText);
      // Adding props to show the Alert
      props.showAlert("Converted to LowerCase","success");
    }
  };
  // Craete a function for Remove Extra Spaces to remove extra space Button 
  const removeExtraSpaces = () => {
    let newText;
    // Use regex logic
    newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed","success");
  };
  // Create a function for Clear all text in the textarea
  const ClearAll = ()=>{
    let newText = "";
    setText(newText);
    // Adding props to show the Alert
    props.showAlert("All text Cleared","success");
  }
  // Create a function for Copy teh text in the textarea
  const copytext = () => {
    navigator.clipboard.writeText(text);
    // Adding props to show the Alert
    props.showAlert("Text is Copied","success");
  }
  // Create a function for paste text in the textarea
  const pasteText = ()=>{
    navigator.clipboard.readText().then(cliptext =>
      setText(cliptext),
      err => console.log(err),
      // Adding props to show the Alert
      props.showAlert("Text is Pasted","success")
      );
      
  }
  // Create a function for setting the color according to the mode
  const textColor = () =>{
    return props.mode==='primary'? "dark":"light";
  }

  // Create a function for remove the bug of showing 1 word in the counter when there is no word
   const countWords=(text)=>{
    let wc = text.split(" ").length;
    text.split(" ").forEach((word) => {
        if(!word.length){
            wc -= 1;  
        }
    });

    return wc;
}
  return (
    <>
      <div className={`mb-3 container text-${textColor()}`}>
        {/* Adding a heading from props*/}
        <h1 className={`my-4 text-${textColor()}` } style ={{fontSize:"x-large"}}>{props.heading}</h1>
        <textarea
          className="form-control"
          // Add the value
          value={text}
          // Add the function to the onChange event
          onChange={HandleOnChange}
          id="Box"
          rows="8"
        ></textarea>
        {/* Button for converting text to lowerCase anf UpperCase */}
        <button disabled = {text.length ===0} className="btn btn-primary my-2 " onClick={ToogleClickChange}>
          {btnText}
        </button>
        {/* Button for Remove Extra Spaces */}
        <button disabled = {text.length ===0} className="btn btn-warning mx-2  my-2" onClick={removeExtraSpaces}>
          Remove Exra Spaces
        </button>
        {/* Button for Clear text */}
        <button disabled = {text.length ===0} className="btn btn-danger  my-2" onClick={ClearAll}>Clear Text</button>
        {/* Button for Copying text */}
        <button disabled = {text.length ===0} className="btn btn-success mx-2  my-2" onClick={copytext}>Copy Text</button>
        {/* Button for for Paste text */}
        <button disabled = {text.length > 0} className="btn btn-info my-2"  onClick={pasteText}>Paste Text</button>
      </div>


      <div className={`container text-${textColor()}`}>
        <h2 className={`border-bottom border-3 border-danger  p-2 text-center`}>
          Text summary
        </h2>
        <p className=" p-2 text-center">
          {countWords(text)} Words and {text.length} Characters
        </p>
        <h2 className="border-bottom border-3 border-danger p-2 text-center ">
          Reading time
        </h2>
        <p className=" p-2 text-center">
          {0.008 * countWords(text)} Minutes and{" "}
          {0.008 * 60 * countWords(text)} Seconds Reads
        </p>
        <h2 className="border-bottom border-3 border-danger p-2 text-center ">
          Preview
        </h2>
        <p className="text-center">{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
