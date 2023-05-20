import './Expenses.css';
import React from 'react';

import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return(

    props.item.map(

      expense => (
        < ExpenseItem
          date={expense.date}
         title={expense.title}
          amount={expense.amount} />

          )

    )
  )

}



export default Expenses;