// Importing Components

import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  // Create a  useState for Alert Function
  const [alert, setalert] = useState(null);
  // Create a Function for Showing Alert
  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type,
    });
    // Add the setTimeout to clear the alert after the given seconds
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  // Create a useState for Theme Mode
  const [mode, setMode] = useState("primary");
  // Create a Function for toggle Change Theme Mode
  const toggleMode = () => {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#323036";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };


  return (
    <>
    {/* Add the React Router */}
    {/* <BrowserRouter> */}
      {/* Adding Navbar Component to add it in the Web Page */}
      <Navbar
        aboutText="About Me"
        //  Write the props of Navbar Component
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* Adds alert Component in the Web page */}
      <Alert alert={alert} />

      {/* Making a Div container to alin in Bootstrap */}
      <div className="container my-3">
        
          {/* <Routes>
            <Route
              path="/"
              element={ */}
                <TextForm
                  // Passing props to the TextForm Component
                  heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              {/* }
          //   />
          //   <Route path="/About" element={<About mode={mode} toggleMode={toggleMode} />} />
          //   {/* <Route path="contact" element={ <Contact/> } /> 
          // </Routes> */}
      </div>
        {/* </BrowserRouter> */}
    </>
  );
}

// // navbar prototype props
// Navbar.prototype = {
//   title : PropTypes.string,
//   aboutText : PropTypes.string
// }

// Navbar.defaultProps ={
//   title: "Title is here",
//   aboutText : "About text here"
// }

export default App;
