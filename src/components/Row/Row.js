import React from "react";

/**
 * @param {{ guessResult: { status: string; letter: string }[] | null; answer: string }} props
 */
function Row({ guessResult, answer }) {
  const letters = answer.split("");

  return (
    <p className="guess">
      {letters.map((_, index) => (
        <span
          key={index}
          className={`cell ${guessResult?.[index]?.status ?? ""}`}
        >
          {guessResult?.[index]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Row;
