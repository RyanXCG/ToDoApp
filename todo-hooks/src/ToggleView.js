import React, { useState } from "react";

function ToggleView({ toggleView }) {
  return (
    <div>
      <p>
        <input
          type="radio"
          id="all"
          value="all"
          name="status"
          defaultChecked
          onChange={(e) => {
            toggleView(e.target.value);
          }}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          id="unDone"
          value="unDone"
          name="status"
          onChange={(e) => {
            toggleView(e.target.value);
          }}
        />
        <label htmlFor="unDone">To Do</label>
        <input
          type="radio"
          id="done"
          value="done"
          name="status"
          onChange={(e) => {
            toggleView(e.target.value);
          }}
        />
        <label htmlFor="done">Done</label>
      </p>
    </div>
  );
}

export default ToggleView;
