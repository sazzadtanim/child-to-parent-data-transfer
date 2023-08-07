import React from 'react'

export default function ChildComponent({ transferData }) {
  return (
    <div>
      <h3>CHILD COMPONENT STARTS</h3>
      <input
        type='text'
        placeholder='any data on child'
        onChange={e => transferData(e.target.value)}
      />
      <h3>CHILD COMPONENT END</h3>
    </div>
  )
}

//In child component, input of the transferData function is the output of the transferData function in parent componet

//In child component:
// 1) set a transferData function on prop
// 2) put childData as the input of the transferData function
