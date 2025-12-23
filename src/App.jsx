import { useState, useEffect } from 'react';
import { GameHeader } from './components/GameHeader';


const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];


function App() {

  const [ cards, setCards ] = useState([]);     // Create an array in useState

  const initializeGame = () => {
    
    // See the card values
    console.log('initial card values: ' + cardValues);


    // For each card, we want to save more information than just the value
    //   So for each card we have id, value, isFlipped, isMatched
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value, 
        isFlipped: false,
        isMatched: false
      }
    ));

    // See the card values
    console.log('final card values: ' + finalCards);

    // Set the shuffled (final) cards in useState
    setCards(finalCards);

  };

  useEffect(() => {
    initializeGame();
  },[]);

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid"></div>
        {cardValues.map((card) => (
          <Card card={card} />
        ))};
    </div>
  );
}

export default App;
