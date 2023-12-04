import React from 'react';
import ScratchCardImg from './img/images-card.jpg';
import ScratchCardComponent from 'react-scratchcard';

function CustomScratchCard() {
  const generateRandomContent = () => {
    return Math.random() > 0.5 ? { content: 'Winner', color: 'green' } : { content: 'Loser', color: 'red' };
  };

  const settings = {
<<<<<<< HEAD:src/game-three/scratchCard.js
    width: 300,
    height: 152,
=======
    width: 340,
    height: 200,
>>>>>>> 91a4cb2ad04f40bf57b19b1c70e27eb394c84b3f:src/3rd-game/scratchCard.js
    image: ScratchCardImg,
    finishPercent: 50,
    onComplete: () => console.log('The card is now clear!'),
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const cardStyle = {
    display: 'inline-block',
    margin: '10px',
  };

  // Generate content for each card once
  const cards = [...Array(6)].map(() => generateRandomContent());

  return (
    <div>
<<<<<<< HEAD:src/game-three/scratchCard.js
      <h1 style={{ textAlign: 'center', color: 'red' }}>Scratch the Cards</h1>

      <div style={cardContainerStyle}>
        {cards.slice(0, 3).map((card, index) => (
          <div style={cardStyle} key={index}>
            <ScratchCardComponent {...settings}>
              <h1 style={{ textAlign: 'center', color: card.color }}>{card.content}</h1>
            </ScratchCardComponent>
          </div>
        ))}
      </div>

      <div style={cardContainerStyle}>
        {cards.slice(3).map((card, index) => (
          <div style={cardStyle} key={index + 3}>
            <ScratchCardComponent {...settings}>
              <h1 style={{ textAlign: 'center', color: card.color }}>{card.content}</h1>
            </ScratchCardComponent>
          </div>
        ))}
=======
      <h1 style={{textAlign: 'center', color:'gray'}}>Scratch the Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* First Row */}
        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Winner</h1>
          </ScratchCardComponent>
        </div>

        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'red' }}>Loser</h1>
          </ScratchCardComponent>
        </div>

        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'red' }}>Loser</h1>
          </ScratchCardComponent>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Second Row */}
        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'red' }}>Loser</h1>
          </ScratchCardComponent>
        </div>

        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Winner</h1>
          </ScratchCardComponent>
        </div>

        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Winner</h1>
          </ScratchCardComponent>

        </div>
>>>>>>> 91a4cb2ad04f40bf57b19b1c70e27eb394c84b3f:src/3rd-game/scratchCard.js
      </div>
    </div>
  );
}

export default CustomScratchCard;

