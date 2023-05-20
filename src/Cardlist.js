import React from "react";
import Card from './Card';
//import { Roobot } from "./Roobot";
const Cardlist = ({ Roobot }) => {
    
        return(
            

        <div>
            {
                Roobot.map((user,i)=>{
                    return(
                        <Card key={i} 
                        id={Roobot[i].id} 
                        name={Roobot[i].name} 
                        email={Roobot[i].email} 
                         />
            
                    )
                })
            }
        </div>
    );

}
export default Cardlist;









