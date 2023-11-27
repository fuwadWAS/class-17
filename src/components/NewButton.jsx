import React from 'react'


const NewButton = ({text,className}) => {
  return (
    <button className={`${className} border border-[#FFF] rounded-2xl font-regular text-[#000] text-[24px] font-pop hover:bg-[#FFF]`}>{text}</button>
  )
}

export default NewButton