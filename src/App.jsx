import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'


function App() {


  return (
    <>
     <Button design="bg-red-500 p-[15px] rounded-lg mt-[20px] ml-[20px] border-2 border-green-500 mr-[10px] hover:bg-yellow-500 hover:text-white font-Frank font-Podkova" text="shop now"/>
     <Button design="bg-sky-500 p-[15px] rounded-lg mt-[20px] ml-[20px] border-2 border-green-500 mr-[10px] hover:bg-yellow-500 hover:text-white font-Podkova" text="contuct us"/>
     <Button design="bg-pink-500 p-[15px] rounded-lg mt-[20px] ml-[20px] border-2 border-green-500 mr-[10px] hover:bg-yellow-500 hover:text-white font-Podkova" text="red more"/>
    </>
  )
}

export default App
