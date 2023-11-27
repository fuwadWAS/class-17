import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Images from '../Images'
import sweater from '../../assets/collection1.png'
import jeans from '../../assets/collection2.png'
import baskets from '../../assets/collection3.png'
import NewButton from '../NewButton'


const Collection = () => {
  return (
    <section className="pt-[217px] pb-[100px] bg-[#FFFFFF]">
        <Container>
            <Heading className="mx-auto text-center font-Frank fontsemibold text-black pb-[120px]" text="New Collection" as="h1"/>
            <Flex className=" justify-between">
                <div className="relative">
                    <Images src={sweater}/>
                  <NewButton className="px-[108px] py-[9px] absolute bottom-[30px] left-[25px]" text="sweater"/>
                </div>
                <div className="relative">
                    <Images src={jeans}/>
                    <NewButton className="px-[140px] py-[9px] absolute bottom-[30px]  left-[12px]" text="jeans"/>
                </div>
                <div className="relative">
                    <Images src={baskets}/>
                    <NewButton className="px-[130px] py-[15px] absolute bottom-[30px]  left-[30px]" text="baskets"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Collection