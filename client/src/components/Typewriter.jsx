import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../css/Typewriter.css";

const Typewriter = ({ word }) => {
  const [shownLetters, setShownLetters] = useState(0);
  const letters = word.split("");

  useEffect(() => {
    if (shownLetters < letters.length) {
      const timer = setTimeout(() => {
        setShownLetters(shownLetters + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [shownLetters, letters.length]);

  return (
    <ul className="flex">
      {letters.map((letter, index) => (
        <li key={index} className={index < shownLetters ? "shown" : "hidden"}>
          {letter}
        </li>
      ))}
      <li
        className={`textCursor ${
          shownLetters === letters.length ? "" : "transparent"
        }`}
      >
        |
      </li>
    </ul>
  );
};

Typewriter.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Typewriter;
