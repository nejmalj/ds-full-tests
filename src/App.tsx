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

  const isButtonDisabled = !moon.value || !sun.value || !earth.value;

  const handleInputChange = (inputSet) => (e) => {
      const value = Math.max(1, Math.min(2, parseInt(e.target.value) || 0));
      inputSet((prev) => ({ ...prev, value }));
  };

    return (
      <>
          <div className="interface">
              <h1>Corodinsite Jupiterienne</h1>
              <div className="moon">
                  <label>Cadran de la lune</label>
                  <input type={'number'} max={2} min={1} value={moon.value}
                         onChange={handleInputChange(setMoon)}/>
              </div>
              <div className="sun">
                  <label>Cadran du soleil</label>
                  <input type={'number'} max={2} min={1} value={sun.value}
                         onChange={handleInputChange(setSun)}/>
              </div>
              <div className="earth">
                  <label>Cadran de la terre</label>
                  <input type={'number'} max={2} min={1} value={earth.value}
                         onChange={handleInputChange(setEarth)}/>
              </div>
              <button className="calculate-value-button" onClick={handleCalculate} disabled={isButtonDisabled}>Calculer
                  l'heure jupiterienne
              </button>
              {result && <div className="result">Résultat : {result}</div>}
          </div>
      </>
    )
}

export default App
