import React, { Component } from "react";

class Card extends Component {
  render() {
    const { card, toggleDone, deleteCard } = this.props;
    return (
      <div>
        <h4>Name: {card.name}</h4>
        <p>{card.content}</p>
        <button
          onClick={() => {
            toggleDone(card);
          }}
        >
          {card.isDone ? "unDone" : "Done"}
        </button>
        <button
          onClick={() => {
            deleteCard(card);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
