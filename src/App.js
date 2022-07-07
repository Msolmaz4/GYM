
import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Join from './components/Testia/Join/Join';
import Testia from './components/Testia/Testia';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testia/>
        <Join/>
    </div>
  );
}

export default App;
