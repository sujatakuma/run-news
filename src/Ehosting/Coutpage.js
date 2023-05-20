import React from 'react'

const Coutpage = (props) => {
    return (
        
            <div>
                <div className="card" style={{ width: "18rem", height: "24rem", margin: '5px' }}>
                    <img src={props.image} height={220} width={250} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0, 45)}</h5>
                        <p className="card-text">RS {props.price}</p>
                        <i class="fas fa-star" style={{ margin: "2px" }} /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />
                        
                    </div>
                </div>
            </div>


            )
}

            export default Coutpage
