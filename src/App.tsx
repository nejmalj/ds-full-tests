import { useState } from 'react'
import './App.css'
import { getJupiterHour } from "./modules/calcul.ts";

function App() {
  const [moon, setMoon] = useState({ value: 1, isActivated: true });
  const [sun, setSun] = useState({ value: 1, isActivated: true });
  const [earth, setEarth] = useState({ value: 1, isActivated: true });
  const [result, setResult] = useState("");

  const handleCalculate = () => {
      const jupiterHour = getJupiterHour(moon, sun, earth);
      setResult(jupiterHour);
  };

  return (
      <>
      <h1>Corodinsite Jupiterienne</h1>
      <div className="interface">
          <div className="moon">
              <label>Cadran de la lune</label>
              <input type={'number'} max={2} min={1} value={moon.value}
                     onChange={(e) => setMoon({...moon, value: parseInt(e.target.value)})}/>
          </div>
          <div className="sun">
              <label>Cadran du soleil</label>
              <input type={'number'} max={2} min={1} value={sun.value}
                     onChange={(e) => setSun({...sun, value: parseInt(e.target.value)})}/>
          </div>
          <div className="earth">
              <label>Cadran de la terre</label>
              <input type={'number'} max={2} min={1} value={earth.value}
                     onChange={(e) => setEarth({...earth, value: parseInt(e.target.value)})}/>
          </div>
          <button onClick={handleCalculate}>Calculer l'heure jupiterienne</button>
          {result && <div className="result">Résultat : {result}</div>}
      </div>
</>
)
}

export default App
