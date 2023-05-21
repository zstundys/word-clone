import React from "react";

/**
 * @param {{ length: number; onSubmit: (value: string) => void }} props
 * @returns
 */
function GuessInput({ length, onSubmit }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);

    setValue("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        required
        minLength={length}
        maxLength={length}
        id="guess-input"
      />
      <button className="visually-hidden">Check guess</button>
    </form>
  );
}

export default GuessInput;
