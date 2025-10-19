import "../App.css";

interface IncomeBarProps {
  split: number[];
  totalIncome: number;
}

const IncomeBar = ({ split, totalIncome }: IncomeBarProps) => {

    const colors = ["#FF5733", "#33f1ffff", "#F1C40F", "#9B59B6"];

    const expenseItems = split.map((percent, index) => 
    <div className="expense-item" style={{ height: `${percent}%`, backgroundColor: `${colors[index]}` }}>
      <h1>{`$${(totalIncome * (percent / 100)).toFixed(2)}`}</h1>
    </div>);


  return (
      <div className='income-bar-container'>
        {expenseItems}
      </div>

  );
};


export default IncomeBar;