import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Darkmode has been set", "success");
      // evil title bar trick
      // setInterval(() => {
      //   document.title = "You are a luck winner";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "congrats";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("White mode has been set", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
