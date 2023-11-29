import React, { useState, useEffect } from 'react';

const generateRandomSlotValue = () => {
  const symbols = ['Cherry', 'Orange', 'Lemon', 'Kiwi', 'BlueBerry'];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const SlotMachine = () => {
  const initialSlots = Array.from({ length: 3 }, generateRandomSlotValue);
  const [slots, setSlots] = useState(initialSlots);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setSlots((prevSlots) =>
          prevSlots.map(() => generateRandomSlotValue())
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setIsSpinning(false);
      }, 2000);
    }
  }, [isSpinning]);

  const handleSpin = () => {
    if (!isSpinning) {
      setSlots(initialSlots);
      setIsSpinning(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {slots.map((symbol, index) => (
          <div
            key={index}
            style={{
              margin: '10px',
              padding: '20px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f8f8f8',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              minWidth: '100px',
            }}
          >
             <img
      src={`images/${symbol.toLowerCase()}.png.jpg`} 
      alt={symbol}
      style={{ height: '50px', marginBottom: '10px' }}
    />
            <div
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                textTransform: 'capitalize',
              }}
            >
              {symbol}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {isSpinning ? 'Spinning...' : 'Click Here'}
      </button>
    </div>
  );
};

const HotSlotGame = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h1 style={{ color: '#4caf50', marginBottom: '30px', fontSize: '36px' }}>
        Hot Slot Game
      </h1>
      <SlotMachine />
    </div>
  );
};

export default HotSlotGame;
