import React, { useState } from "react";

const NumberGame = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numGuess = Number(guess);
    if (numGuess < 1 || numGuess > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }

    setGuesses(guesses + 1);
    if (numGuess === randomNumber) {
      setMessage(`Correct! The number was ${randomNumber}.`);
      resetGame();
    } else if (numGuess < randomNumber) {
      setMessage("Too low. Try again!");
    } else {
      setMessage("Too high. Try again!");
    }
    setGuess("");
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuesses(0);
    setGuess("");
    setMessage("");
  };

  return (
    <div>
      <h2>Guess the Number!</h2>
      <p>I'm thinking of a number between 1 and 100.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button type="submit">Guess</button>
        <button type="button" onClick={resetGame}>
          Reset Game
        </button>
      </form>
      {message && <p>{message}</p>}
      <p>Number of Guesses: {guesses}</p>
    </div>
  );
};

export default NumberGame;
