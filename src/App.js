import React, { useMemo, useState } from "react";
import "./style.css";

// Define a React functional component named App
export default function App() {
  // State for the entered word and a function to update it
  const [word, setWord] = useState("");

  // Use useMemo to memoize the result of the palindrome check
  const isPalindrome = useMemo(() => {
    // Check if the word is a palindrome (reads the same backward as forward)
    return word === word.split("").reverse().join("");
  }, [word]); // Recalculate only when the 'word' state changes

  // Render the user interface using JSX
  return (
    <div className="App">
      <h1>Palindrome checker</h1>
      {/* Form for user input */}
      <form>
        <div>
          {/* Label and input field for the user to type a word */}
          <label>Type your word:  </label>
          <input value={word} onChange={(element) => setWord(element.target.value)} />
        </div>
      </form>
      
      {/* Display whether the entered word is a palindrome or not */}
      <div id="div2">Is it a Palindrome: {isPalindrome ? "Yes" : "No"}</div>
    </div>
  );
}
