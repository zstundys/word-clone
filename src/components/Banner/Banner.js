import React from "react";

/**
 * @param {{ gameOverResult: { state: 'win'; numberOfGuesses: number } | { state: 'lose' } }} props
 */
function Banner({ gameOverResult }) {
  return gameOverResult.state === "win" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{gameOverResult.numberOfGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        <strong>Try better next time!</strong>
      </p>
    </div>
  );
}

export default Banner;
