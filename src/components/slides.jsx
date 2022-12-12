import React from "react"
import { SlidesContainer, SlidesWrapper } from "../styles/slides.styles"
import Slide1 from "../slides/slide-1"
import Slide2 from "../slides/slide-2"
import Slide3 from "../slides/slide-3"
import Slide4 from "../slides/slide-4"
import Slide5 from "../slides/slide-5"
import Slide6 from "../slides/slide-6"
import SlideFinal from "../slides/slide-final"
import Slide7 from "../slides/slide-7"
import Slide8 from "../slides/slide-8"
import Slide9 from "../slides/slide-9"
import Slide10 from "../slides/slide-10"
import Slide11 from "../slides/slide-11"

const Slides = ({ slide }) => {
  
  return (
    <SlidesWrapper>
      <SlidesContainer slide={slide}>
        <Slide1/>
        <Slide2/>
        <Slide3/>
        <Slide4/>
        <Slide5/>
        <Slide6/>
        <Slide7/>
        <Slide8/>
        <Slide9/>
        <Slide10/>
        <Slide11/>
        <SlideFinal/>
      </SlidesContainer>
    </SlidesWrapper>
  )
}

export default Slides