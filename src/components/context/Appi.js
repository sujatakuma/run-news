import React, { createContext } from 'react'
import A from './A'
import UseEffects from './UseEffects';

const Firstname = createContext();
const Listname = createContext();


const Appi = () => {
  return (
    <div>
      <Firstname.Provider value={"Suman"}>
        <Listname.Provider value={'kumari'}>
          <A></A>
        </Listname.Provider>

      </Firstname.Provider>
      <UseEffects></UseEffects>
    </div>
  )
}

export default Appi;
export { Firstname };
export {Listname};
