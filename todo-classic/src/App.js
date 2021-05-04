import "./App.css";
import React, { Component } from "react";
import InputAdd from "./InputAdd";
import ListView from "./ListView";
import ToggleView from "./ToggleView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      filter: "all",
    };
  }

  addCard = (card) => {
    this.setState({
      cards: [card, ...this.state.cards],
    });
  };

  toggleView = (filter) => {
    this.setState({ filter });
  };

  toggleDone = (card) => {
    card.isDone = !card.isDone;
    this.setState(this.state.cards);
  };

  deleteCard = (toBeDeleted) => {
    this.setState({
      cards: this.state.cards.filter((card) => card !== toBeDeleted),
    });
  };

  filterCards = (cards) => {
    const { filter } = this.state;
    if (filter === "done") {
      return cards.filter((card) => card.isDone);
    } else if (filter === "unDone") {
      return cards.filter((card) => !card.isDone);
    } else {
      return cards;
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <h2>This is the class-bassed component version of the to do app</h2>
        <InputAdd addCard={this.addCard} cards={cards} />
        <ToggleView toggleView={this.toggleView} />
        <ListView
          cards={this.filterCards(cards)}
          toggleDone={this.toggleDone}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
