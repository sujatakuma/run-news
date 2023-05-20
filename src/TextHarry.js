import React, { useState } from "react";


const TextHarry = (props) => {
    const hendleUpClick = () => {
        console.log('Uppercase was clicked' + text);
        const NewText = text.toUpperCase();
        setText(NewText)
        props.showAlert("converted to uppercase!","success")

        //setText('you have a clicked on hendleUpClick')
    }
    const hendleLoClick = () => {
        ////console.log('Uppercase was clicked'+ text);
        const NewText = text.toLowerCase();
        setText(NewText)
        props.showAlert("Converted to lowercase!","success")


    }
    const hendleClick = () => {
        //console.log(''+ text);
        const NewText = '';
        setText(NewText)
        props.showAlert("clear text!","success")

    }
    const hendleonChange = (event) => {
        console.log('On Change')
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div>

<div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.heading }</h2>
<div className="my-3">
 
  <textarea className="form-control"  value={text} onChange={hendleonChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={hendleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-2"onClick={hendleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary mx-2"onClick={hendleClick}>Clear</button>
</div >
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

</div >

    );
}
export default TextHarry;