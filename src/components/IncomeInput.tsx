import { useState } from 'react';


interface IncomeInputProps { 
    onIncomeFormSubmit: (income: number) => void;


}

function IncomeInput({onIncomeFormSubmit}: IncomeInputProps){
    /*
    You need Two Separate States: 
    Using income for the input box and submitIncome for the 
     final result, allowing the input to clear while 
    the result remains displayed.
    */

    //variables to update income from user typed input: 
    const [income, setIncome] = useState('');
    //variables for the income that will be displayed
    //const [submitIncome, setSubmitIncome] = useState('');
    
    //set income based on user input into textbox
    const handleUpdate = (event) => {
        setIncome(event.target.value);
    }

    const handleSubmit = (event) => {
        //prevents full page refresh
        event.preventDefault();
        //avoid empty submission and uses strict equality operator
        
        if (income.trim() === '') {
            alert("Please enter income before submitting.");
            return
        }
        
    };
    //return displays the app
    return (
        <form onSubmit ={handleSubmit} >
            <input
            //allows the user to type text as input
            type = "text"
            placeholder = "Enter Income Here"
            
            value = {income} // The input's value is controlled by the state
            onChange = {handleUpdate} // Calls update() whenever the text changes
            />

            {/* Create submission button */}
            <button onClick={() => onIncomeFormSubmit(Number(income))} type = "submit">Submit</button>

        </form>
    );

    }
    //make the componet usable on the main app
    export default IncomeInput;
    