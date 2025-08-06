import { useRef, useState } from "react";
import Chips from "./components/Chips";

function App() {
  const inputElement = useRef();
  const handleFocus = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <div>
        {/* <input type="text" placeholder="Type Here" ref={inputElement} />
        <button onClick={handleFocus}>Focus Input</button> */}
        <Chips />
      </div>
    </>
  );
}

export default App;
