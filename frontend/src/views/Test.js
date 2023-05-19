import React, { useState, useEffect } from 'react'

export default function Test() {
  const [count, setCount] = useState(0)
  let n =0

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  const onClick = () =>{
    console.log("?")
    n++
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={onClick}>Shit {n}</button>
    </div>
  )
}