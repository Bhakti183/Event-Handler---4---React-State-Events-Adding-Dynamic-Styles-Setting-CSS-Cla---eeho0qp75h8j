import React from "react";
import "../styles/App.css";
const App = () => {
  const handleDoubleClick = (event) => {
    console.log("I was double clicked");
  };
  function oneClick() {
    console.log("I was not double clicked");
  }
  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onClick={oneClick}
        onDoubleClick={handleDoubleClick}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
