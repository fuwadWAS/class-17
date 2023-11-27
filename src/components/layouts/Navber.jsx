import Container from '../Container'
import React from 'react'
import Flex from '../Flex'
import Images from '../Images'
import logo from '../../assets/logo.png'
import Menu from '../Menu'
import Button from '../Button'


const Navber = () => {
  return (
    <nav className="py-16 absolute z-[999] w-[100%] top-0 left-0">
        <Container>
            <Flex>
                <div className="w-[25%]">
                    <Images src={logo}/>
                </div>
                <div className="w-[50%] pt-2.5">
                    <Menu/>
                </div>
                <div className="w-[25%] text-right ">
                    <Button className="py-2.5 px-7 border border-secondaryColor hover:bg-secondaryColor font-semibold shadow-lg" text="Login"/>
                    <Button className="py-2.5 px-7 border border-secondaryColor ml-3 hover:bg-secondaryColor font-semibold shadow-lg" text="Sign up"/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber
