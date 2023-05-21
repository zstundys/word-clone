import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Row from "../Row";
import Banner from "../Banner";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(1, NUM_OF_GUESSES_ALLOWED).map(() => null)
  );
  const [gameOver, setGameOver] = React.useState(null);

  const handleSubmit = (guess) => {
    if (gameOver) {
      return;
    }

    const emptyIndex = guessResults.findIndex((guess) => guess === null);
    const resultForGuess = checkGuess(guess, answer);

    guessResults.splice(emptyIndex, 1, resultForGuess);
    setGuessResults([...guessResults]);

    if (resultForGuess.every((r) => r.status === "correct")) {
      setGameOver({ state: "win", numberOfGuesses: emptyIndex + 1 });
    }

    const isLastEntry = emptyIndex === guessResults.length - 1;
    if (isLastEntry) {
      setGameOver({ state: "lose" });
    }
  };

  return (
    <>
      <div className="guess-results">
        {guessResults.map((g, index) => (
          <Row answer={answer} guessResult={g} key={index} />
        ))}
        {<GuessInput onSubmit={handleSubmit} length={answer.length} />}
      </div>

      {gameOver ? <Banner gameOverResult={gameOver} /> : undefined}
    </>
  );
}

export default Game;
