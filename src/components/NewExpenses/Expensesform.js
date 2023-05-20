import React, { useState } from "react";

import './Expensesform.css';

const Expensesform = (props) => {
    const [enteredTital, setEnteredTital]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');



    const titalchangehandler = (event)=>{
        setEnteredTital(event.target.value);
    }
    const amountchangehandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const datechangehandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseDate={
          tital: enteredTital,
           amount:enteredAmount,
           date:new Date(enteredDate)

        }
        props.onsave(expenseDate);
        console.log(expenseDate);

        setEnteredTital('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    

    return (
        <form onSubmit={submitHandler}>
            <div className="New-Expense">
                <div className="New_Expense_wrap">
                    <label>Title</label>
                    <input type="text" value={enteredTital} onChange={titalchangehandler}></input>
                </div>
                <div className="New_Expense_wrap">
                    <label>Amount</label>
                    <input type="number" min="0,01" step="0.01" value={enteredAmount} onChange={amountchangehandler} ></input>
                </div>
                <div className="New_Expense_wrap">
                    <label>Date</label>
                    <input type="Date" value={enteredDate} onChange={datechangehandler}></input>
                </div>
                <div className="New_Expense_action">
                <button type="sumbit">Add Expenses</button>
            </div>

            </div>
            
        </form>
    );
}
export default Expensesform;