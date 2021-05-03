import "./App.css";
import { useState } from "react";
import InputAdd from "./InputAdd";
import ListView from "./ListView";
import ToggleView from "./ToggleView";

function App() {
  // card properties: name, content, isDone
  const [cards, setCards] = useState([]);
  // filter has three cases: all, unDone, done
  const [filter, setFilter] = useState("all");

  const addCard = (card) => {
    setCards([card, ...cards]);
  };

  const toggleView = (filter) => {
    setFilter(filter);
  };

  const toggleDone = (card) => {
    // update the card
    //
    card.isDone = !card.isDone;
    setCards([...cards]);
  };

  const deleteCard = (toBeDeleted) => {
    setCards(cards.filter((card) => card !== toBeDeleted));
  };

  const filterCards = (cards) => {
    if (filter === "done") {
      return cards.filter((card) => card.isDone);
    } else if (filter === "unDone") {
      return cards.filter((card) => !card.isDone);
    } else {
      return cards;
    }
  };

  return (
    <div className="App">
      <h2>This is a React todo App Using react hooks without context api</h2>
      <InputAdd addCard={addCard} cards={cards} />
      <ToggleView toggleView={toggleView} />
      <ListView
        cards={filterCards(cards)}
        toggleDone={toggleDone}
        deleteCard={deleteCard}
      />
    </div>
  );
}

export default App;
