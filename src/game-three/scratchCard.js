import React from 'react';
import ScratchCardImg from './img/images-card.png';
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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const gridContainerStyle = {
    display: 'grid',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  };

  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };

  // Generate content for 8 cards
  const cards = [...Array(8)].map(() => generateRandomContent());

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}>Scratch the Cards</h1>

      <div style={gridContainerStyle}>
        {cards.map((card, index) => (
          <div style={cardStyle} key={index}>
            <ScratchCardComponent {...settings}>
              <h1 style={{ textAlign: 'center', color: card.color, fontSize: '1.5rem' }}>{card.content}</h1>
            </ScratchCardComponent>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomScratchCard;
