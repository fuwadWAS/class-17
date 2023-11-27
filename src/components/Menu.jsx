import React from 'react'
import Flex from './Flex'
import List from './List'

const Menu = () => {
  return (
    <ul>
        <Flex className="justify-between ">
            <List src="#" text="Men"/>
            <List src="#" text="Women"/>
            <List src="#" text="Kids"/>
            <List src="#" text="Collection"/>
            <List src="#" text="Trends"/>
        </Flex>
    </ul>
  )
}

export default Menu
