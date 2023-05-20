import React from 'react';

import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return(
        <div>{month}/{year}/{day}</div>
            
            );
}
export default ExpenseDate;