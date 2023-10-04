import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guessNumber, restartGame } from "../../store/actions/actions";

const App = () => {
  const { answer, over } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onGuess = () => {
    const inputNumber = parseInt(inputValue);

    if (!isNaN(inputNumber)) {
      dispatch(guessNumber(inputNumber));
    }

    setInputValue("");
  };

  const onRestart = () => {
    dispatch(restartGame());
  };

  return (
    <div>
      <h1>угадай чисоо</h1>
      {over ? (
        <>
          <p>{answer}</p>
        </>
      ) : (
        <>
          <input
            type="number"
            value={inputValue}
            onChange={inputChange}
            
          />
          <button onClick={onGuess}>отгадать</button>
          <p>{answer}</p>
        </>
      )}
    </div>
  );
};

export default App;
