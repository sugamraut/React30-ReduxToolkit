import React from 'react'

const Display = ({text,displayValue}) => {
    console.log("I am from display")

  return (
    <p>From Display component, {text}, {displayValue}</p>
  )
}

export default React.memo(Display)