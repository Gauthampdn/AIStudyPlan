import { useState } from "react";

function Form({ onFormSubmit }) {
  const [numhours, setNumhours] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(`Give me a detailed${numhours}-hour study plan for the following topics[${topic}] and advice on how to study for it. Give your response as a Markdown file format.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Num of hours:
        <input
          type="number"
          value={numhours}
          onChange={(e) => setNumhours(e.target.value)}
        />
      </label>
      <br />
      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Generate study plan</button>
    </form>
  );
}

export default Form;
