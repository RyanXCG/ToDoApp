import React from "react";
import Card from "./Card";

function ListView({ cards, toggleDone, deleteCard }) {
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

export default ListView;
