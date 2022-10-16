import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Error from "./components/Error";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [modess, setModess] = useState(true);

  const modeBooleans = () => {
    if (modess) {
      setModess(false);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      // console.log("true");
    } else {
      setModess(true);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // console.log("false");
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                modes={modess}
                modeBoolean={modeBooleans}
                modess={modess}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About modess={modess} modeBoolean={modeBooleans} />}
          ></Route>
          <Route exact path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
