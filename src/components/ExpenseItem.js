import './ExpenseItem.css'
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) =>{
    
    
    /*const [newTitle, setNewTitle] = useState();
    const [title, setTitle] = useState(props.title);
    const clickHandler= () =>{
        setTitle(newTitle);
    }
    const changeHandler=(event)=>{
        setNewTitle(event.target.value);

    }*/

    
    /*let month = props.date.toLocaleString('en-US', { month: 'long' });
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });*/
    
    
    return(
        <section>
            <div className='flex'>
                <div className='item'>
                    <ExpenseDate date={props.date}/></div>
                    <div className='description'>
                        {props.title }</div>
                    <div className='price'>{props.amount}</div>
                    
                </div>
             
        </section>
    )
}
export default ExpenseItem;