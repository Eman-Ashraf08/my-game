import React from 'react';
import ScratchCardImg from './img/images-card.jpg';
import ScratchCardComponent from 'react-scratchcard';

function CustomScratchCard() {
  const generateRandomContent = () => {
    return Math.random() > 0.5 ? { content: 'Winner', color: 'green' } : { content: 'Loser', color: 'red' };
  };

  const settings = {
    width: 300,
    height: 152,
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
      </div>
    </div>
  );
}

export default CustomScratchCard;

