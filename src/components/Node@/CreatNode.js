import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './creatNote.css'

const CreatNode = (props) => {
    const [note, setNode] = useState({
        title: "",
        content: "",
    })
    const InputEvent = (event) => {
        //const value = event.target.value;
        const { name, value } = event.target;


        setNode((PrevData) => {
            return {
                ...PrevData,
                [name]: value,

            }
        }
        );
        console.log(note);
    }
    const addEvent = () => {
        props.passNode(note);
        setNode({
            title: "",
            content: "",
        });
    };
    return (
        <div className='note_write'>
           
                <input type="text"
                    name="title"
                    value={Node.title}
                    onChange={InputEvent}
                    placeholder='Title' />
                <br />

                <textarea rows="" column=""
                    name="content"
                    value={Node.content}
                    onChange={InputEvent}
                    placeholder='Wride a node'>
                </textarea>
                <button onClick={addEvent} >
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" height={40} width={40} alt="" srcset="" />

                </button>
            </div>
            

       
    )
}

export default CreatNode;
