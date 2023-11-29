import React from 'react';
import ScratchCardImg from './img/images-card.jpg';
import ScratchCardComponent from 'react-scratchcard'; 

function CustomScratchCard() {
  const settings = {
    width: 300,
    height: 192,
    image: ScratchCardImg,
    finishPercent: 50,
    onComplete: () => console.log('The card is now clear!'),
  };

  const cardStyle = {
    display: 'inline-block',
    margin: '10px', 
  };

  return (
    <div>
      <h1 style={{textAlign: 'center', color:'red'}}>Scratch the Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* First Row */}
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

        <div style={cardStyle}>
          <ScratchCardComponent {...settings}>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Winner</h1>
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
            <h1 style={{ textAlign: 'center', color: 'red' }}>Loser</h1>
          </ScratchCardComponent>

        </div>
      </div>
    </div>
  );
}

export default CustomScratchCard;
