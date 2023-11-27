import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`${className} rounded-btnRadius font-pop duration-200`}>{text}</button>
  )
}

export default Button

