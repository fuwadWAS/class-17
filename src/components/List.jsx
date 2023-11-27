import React from 'react'

const List = ({text,href,className}) => {
  return (
    <li><a href={href} className={`${className} font-semibold font-pop text-2xl hover:text-secondaryColor duration-200`}>{text}</a></li>
  )
}

export default List