import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import BestSeller1 from '../../assets/seller1.png'
import BestSeller2 from '../../assets/seller2.png'
import Pragraph from '../Pragraph'
import Button from '../Button'


const Celler = () => {
  return (
    <section className="pt-[36px] pb-[191px] bg-cellerColor relative z-[999]">
        <Container>
            <Flex className="gap-x-[30px]">
                <div className="w-[437px]">
                    <Heading className="pr-[116px] text-[#FFF] font-Frank font-semibold pb-[43px]" text="Best Seller Product " as="h1"/>
                    <Pragraph className="text-[#FFF] font-Frank font-bold pb-[40px] pr-[145px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
                    <Button className="border border-[#000000] py-[24px] px-[86px] hover:bg-black hover:text-[#FFF] text-[24px] font-semibold" text="Learn MORE"/>
                </div>
                <div className="w-[366px] h-[561px]">
                    <Images src={BestSeller1}/>
                </div>
                <div className="w-[366px] h-[561px]">
                <Images src={BestSeller2}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Celler