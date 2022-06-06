import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0, 0, 15)";
      document.querySelector(".container").style.backgroundColor =
        "rgb(46, 46, 46)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.querySelector(".container").style.backgroundColor =
        "rgb(219, 219, 219)";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Navbar
        logo="Texter."
        mode={mode}
        toggleMode={toggleMode}
        label={mode === "light" ? "DarkMode" : "LightMode"}
      ></Navbar>
      <Alert alert={alert} />
      <Container showAlert={showAlert} mode={mode}></Container>
      {/* <Routes>
        <Route
          path="/"
          element={<Container showAlert={showAlert} mode={mode}></Container>}
        />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
