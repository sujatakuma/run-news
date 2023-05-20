import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Prectice = (props) => {
  const Time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(Time)

  const UpdateTime = () => {
    Time = new Date().toLocaleTimeString();
    setCtime(Time);

  };
  setInterval(UpdateTime, 1000)
  console.log("clicked");
  const [Count, setCount] = useState(0);
  const IncNum = () => {
    setCount(Count + 1);


  }
  return (
    <div>

      <Navbar title="hello"></Navbar>
      <Card ><h2>{props.name}</h2></Card>
      <div style={{ backgroundColor: "pink" }}>
        <h1>{Count}</h1>
        <button onClick={IncNum}>click 	😃😄😎</button>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>get time</button>
      </div>
      

    </div>
  )
}

export default Prectice;
