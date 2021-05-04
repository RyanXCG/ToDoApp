import React, { Component } from "react";

class InputAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      content: "",
    };
  }

  render() {
    const { name, content } = this.state;
    const { addCard, cards } = this.props;
    return (
      <div>
        <p>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />{" "}
          Content:{" "}
          <input
            type="text"
            value={content}
            onChange={(e) => {
              this.setState({ content: e.target.value });
            }}
          />{" "}
          <button
            disabled={
              name === "" ||
              cards.find((card) => card.name === name) !== undefined
            }
            onClick={() => {
              addCard({ name, content, isDone: false });
            }}
          >
            Add
          </button>
        </p>
      </div>
    );
  }
}

export default InputAdd;
