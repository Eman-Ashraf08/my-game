import WheelComponent from "react-wheel-of-prizes";


function SpinTheWheel() {
  const segments = [
    "Iphone",
    "Laptop",
    "Bike",
    "LCD",
    "Earports",
    "AC",
    "Car",
    "Washing Machine",
    "Gift Hampers",
    "Diary",
    "Mug",
    "Lamp",
    "LED Lights",
    "Coffee Maker",
    "Dinner Set",
    "Ipad",
    "Sun Glasses",
    "cycles"
  ];
  const segColors = [
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1 style={{textAlign:'center', color:'orange'}}>Spin the wheel for exciting Prizes</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="MM"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="red"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>
    </div>
  );
}
export default SpinTheWheel