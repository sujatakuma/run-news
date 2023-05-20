import React, { useState } from 'react'
import NodeHeader from './NodeHeader'
import NodeFooter from './NodeFooter'
import CreatNode from './CreatNode'
import NoteWrite from './NoteWrite'


const NodeApp = () => {
  const [addItem, setItem] = useState([])

  const addNode = (note) => {
    setItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
    //alert("i am click")
  }
  const onDelete = (id) => {
    setItem((olddeta) =>
      olddeta.filter((currdata, indx) => {
        return indx !== id
      })
    )
  }
  return (
    <>
      <NodeHeader></NodeHeader>
      <CreatNode passNode={addNode} />

      {addItem.map((val, index) => {
        return (
          <NoteWrite
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        )
      })}

      <NodeFooter></NodeFooter>
    </>
  )
}

export default NodeApp
