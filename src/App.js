//import './App.css';
//import React, {useState} from 'react';
import TextHarry from './TextHarry';
import Navbar from './Navbar';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
import Home1 from './components/Home1';
//import { Link } from "react-router-dom";
import AboutUs from './components/AboutUs';
//import Card from './Card';
/*import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";




//import Netflix from './components/Netflix';
//import Bergerking from './components/Bergerkin';
//import ExpenseDate from './components/ExpenseDate';
//import  Expenses from './components/Expenses';
//import NewExpense from './components/NewExpenses/NewExpense';
//import Myppt from './components/Mypage/Myppt';
//import { render } from '@testing-library/react';

/*let DUMMY_EXPENSE=[
  {
    id:"e1",
    title: "food fee",
    amount:"400",
    date:new Date(2021/5/12)
  },
  {
    id:"e1",
    title: "house rent",
    amount:"400",
    date:new Date(2019/3/2)
  },
  {
    id:"e1",
    title: "bus",
    amount:"400",
    date:new Date(2021/3/12)
  },
  {
    id:"e1",
    title: "school fee",
    amount:"400",
    date:new Date(2021/3/12)
  }

  ]
  const App=()=>{
    const[expenses, setExpenses]=useState(DUMMY_EXPENSE);
  

  const addExpenseHendler=(expense)=>{
    const updatedExpense=[expense, ...expenses];
    setExpenses(updatedExpense);
  }
  return(
   
    <div>
      <NewExpense onAddExpense={addExpenseHendler}/>
      <Expenses item={expenses} />
    </div>
  );
}
/*function App(){


  return(
    <div>
      <Myppt></Myppt>
    </div>
  );
}*/
const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mood has enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mood has enable", "success")
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" about="About" />
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className='container'>

      
        <TextHarry showAlert={showAlert} heading="Textarea" mode={mode}></TextHarry>
        {/*<Routes>
          <Route path='about' element={<About />} />
          <Route path='card' element={<Card />} />
  </Routes>*/}

      </div>
    </div>
  );
}

/*const App=()=>{
  return(
    <div>
      < BrowserRouter>
      <Link to="/about">AboutUs</Link>
      <Link to='/home1'>Home1</Link>
      <Routes>
        <Route>
          <Route path='home1' element={<Home1/>}/>
          <Route path='card' element={<card/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>*/
  
export default App;