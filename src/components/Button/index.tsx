import React, { useState ,FC} from "react";

export const Button:FC = function() {
  const [counter, setCounter] = useState(0);

  function clickHandler() {
    setCounter(counter + 1);    
  }

  return (
    <button
        className="btn"
        onClick={clickHandler}
        style={{ height: "100px", width: "100px", backgroundColor: "violet" }}        
      >
        {counter}
      </button>
  );
};