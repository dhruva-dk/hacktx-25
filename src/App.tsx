import { useState } from "react";
import "./App.css";
import IncomeBar from "./components/IncomeBar";
import IncomeInput from "./components/IncomeInput";

function App() {

  const [monthlyIncome, setMonthlyIncome] = useState(1000);
  const [split, setSplit] = useState([100]);


  // When submitting income form, update state 
  const onIncomeFormSubmit = (income: number): void => {
    setMonthlyIncome(income);
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Budget Builder</h1>
      <img
        id="backgroundgalaxy-img"
        src={"https://img.freepik.com/free-psd/cosmic-watercolor-galaxy-swirling-nebula-stars-stardust_632498-24072.jpg?semt=ais_hybrid&w=740&q=80"}
        style={{maxHeight: '4rem'}}
      />
      </div>
      



      <div className="budgeting-container">

        <div className="input-container">

          <div className="card">
            <h1>Update Monthly Income</h1>
            <IncomeInput onIncomeFormSubmit={onIncomeFormSubmit} />
            <h1>Income: ${monthlyIncome}</h1>
          </div>


          <div className="card">
            <h1>Budget Plans</h1>
            <div>
              <div className="split-buttons">
                <button onClick={() => setSplit([50, 30, 20])}>50 / 30 / 20</button>
                <button onClick={() => setSplit([70, 20, 10])}>70 / 20 / 10</button>
                <button onClick={() => setSplit([60, 20, 20])}>60 / 20 / 20</button>
                <button onClick={() => setSplit([80, 10, 10])}>80 / 10 / 10</button>
              </div>
            </div>
          </div>


        </div>




        <IncomeBar split={split} totalIncome={monthlyIncome} />
      </div>
    </div>
  );
}

export default App;
