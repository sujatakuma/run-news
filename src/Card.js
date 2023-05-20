import React from "react";

import './Card.css';


const Card = (props) => {
    return (
        <div className='box'>
            <div className="img">
                <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png`} height={300} width={300}></img>
                <div>
                    <h2 >{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>

        </div>
    );
}
export default Card;