import React, { useState } from 'react'
import './Main.css'
import Node from './Node';

//import { isInputElement } from 'react-router-dom/dist/dom';

const Main = () => {
    const [inputList, setInputList] = useState("")
    const [Items, setItems] = useState([]);

    const ItmeEvent = (event) => {
        setInputList(event.target.value)

    }
    const ListofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("")
    }
    const delet = (id) => {
        console.log("delet")

        setItems((oldItems) => {
            return oldItems.filter((arry, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div >
            <h1></h1>
            {/*<form >*/}
            <div className='main'>
                <div className='main_title'>
                    <input type='text' value={inputList} placeholder='Title' onChange={ItmeEvent}></input>
                    <br />
                    <input type='text' placeholder='write a note...'  ></input>
                    <div className='btn'>
                        <button onClick={ListofItems} >Add</button>
                    </div>
                </div>

            </div>
            {/*</form>*/}


            {/*<h1>{inputList}</h1>*/}
            {Items.map((itemval, index) => {
                return <Node key={index}
                    id={index}
                    text={itemval}
                    onSelect={delet}>


                </Node>

            })}

        </div>
    )
}

export default Main;
