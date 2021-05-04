import React, { Component } from "react";
import Card from "./Card";
class ListView extends Component {
  render() {
    const { cards, toggleDone, deleteCard } = this.props;
    return (
      <div>
        {cards.map((card) => {
          return (
            <Card
              key={card.name}
              card={card}
              toggleDone={toggleDone}
              deleteCard={deleteCard}
            />
          );
        })}
      </div>
    );
  }
}

export default ListView;
