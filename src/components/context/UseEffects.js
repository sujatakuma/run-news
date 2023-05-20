import React, { useEffect, useState } from 'react'

const UseEffects = () => {
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)

    const Clickbutton = (event) => {
        setNum(num + 1)


    }
    const Clickbutto = (event) => {
        setNums(nums + 1)


    }
    useEffect(() => {
        //alert('ok')
        document.title= 'you click me ${num} times';
    });


return (
    <div>
        <button onClick={Clickbutton}>Click me{num}</button>
        <button onClick={Clickbutto}>Click me{nums}</button>
    </div>
)
}

export default UseEffects
