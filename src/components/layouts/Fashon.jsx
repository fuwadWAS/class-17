import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import BestFashion from "../../assets/fashion.png"
import Heading from "../Heading"
import Pragraph from "../Pragraph"
import BG1 from "../../assets/fashonBg.png"
import BG2 from "../../assets/sellerBg.png"


const Fashon = () => {
  return (
    <section className="pt-[136px] pb-[335px] bg-[#FFF] relative">
          
        <Container className="relative">
        <div className="absolute top-[70px] left-[752px] ">
          <Images src={BG1}/>
        </div>
            <Flex className="gap-x-[124px]">
                <div className="w-[660px] h-[686px] z-[333]">
                    <Images src={BestFashion}/>
                </div>
                <div className="w-[443px] h-[186px]">
                    <Heading className="font-Frank font-bold text-black pb-[63px]" text="Best Fashion
                     Since 2010" as="h1"/>
                     <Pragraph className="font-pop font-semibold text-[24px] pr-[60px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                </div>
            </Flex>
            <div className="w-[800px] py-[71px] px-[42px] bg-[#FEECC8] rounded-2xl flex absolute right-[173px]      bottom-[121px]">
              <div className="pl-[35px] pr-[30px] border-r-2  border-black text-center">
                 <Pragraph className="font-pod font-bold text-[64px] pb-[25px]" text="2010"/>
                 <Pragraph className="font-pop text-[28px] font-medium text-black" text="Founded"/>
              </div>
              <div className="pl-[50px] pr-[44px] border-r-2  border-black text-center ">
                 <Pragraph className="font-pod font-bold text-[64px] pb-[25px]" text="5000+ "/>
                 <Pragraph className="font-pop text-[28px] font-medium text-black" text="Product Sold"/>
              </div>
              <div className="pl-[33px] text-center">
                 <Pragraph className="font-pod font-bold text-[64px] pb-[25px]" text="4500+"/>
                 <Pragraph className="font-pop text-[28px] font-medium text-black" text="Best Reviews"/>
              </div>
            </div>
        <div className="absolute bottom-[-20px] left-[315px]">
          <Images src={BG2}/>
        </div>
        </Container>
    </section>
     
  )
}

export default Fashon