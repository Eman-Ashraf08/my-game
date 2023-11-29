import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './Homebar/navbar'
import Home from './Homebar/home'
import SpinTheWheel from './game-one/spinTheWheel'
import CustomScratchCard from './game-three/scratchCard'
import HotSlotGame from './game-two/hotSlot'
function App() {
  return (
   <Router>
    <ButtonAppBar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/spinTheWheel" element={<SpinTheWheel />} />
    <Route path="/scratchCard" element={<CustomScratchCard />} />
    <Route path="/hotSlot" element={<HotSlotGame />} />
    </Routes>
   </Router>
  )
}

export default App
