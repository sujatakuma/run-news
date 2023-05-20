import React from "react";

import './NewExpenses.css';
import Expensesform from './Expensesform';

const NewExpenses=(props)=>{
    const saveExpensedatahendler=(enteredExpenesData)=>{
        const expenseDate={
            ...enteredExpenesData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseDate);
        console.log(expenseDate);
    };
    return(
        <div className="New-Expenses">

            <Expensesform onsave={saveExpensedatahendler}/>


        </div>
    );
}
export default NewExpenses;
