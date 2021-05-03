import React, { useState } from "react";

function InputAdd({ addCard, cards }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <p>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        Content:{" "}
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />{" "}
        <button
          disabled={
            name === "" ||
            cards.find((card) => card.name === name) !== undefined
          }
          onClick={() => {
            addCard({ name, content, isDone: false });
            setName("");
            setContent("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}

export default InputAdd;
