import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`${props.className} text-headingSize`}>{props.text}</props.as>
  )
}

export default Heading