import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import bannerImg from '../../assets/bannerImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Button from '../Button'

const Banner = () => {
  return (
    <section className="bg-parimaryColor pt-[236px] pb-[102px] relative">
      <Container>
        <Flex>
            <div className="w-1/2">
                <Heading className="font-pop font-semibold text-black w-[500px] pr-[50px] pb-[38px]" text="Find The Best Fashion Style 
                For You" as="h3"/>
                <Pragraph className="font-regular text-BPS w-[531px] pr-[60px] leading-normal pb-[76px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                <Button className="text-BBC py-[25px] px-[91px] border border-black hover:bg-black font-semibold" text="SHOP NOW"/>
            </div>
            <div className="w-1/2">
                <Images src={bannerImg}/>
            </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner