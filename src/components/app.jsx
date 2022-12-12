import React, { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { AppStyles, AppContainer, Controls, ControlButton } from "../styles/app.styles"
import Slides from "./slides"

export default () => {

  const [currentSlide, setSlide] = useState(1)

  const prevSlide = () => {
    currentSlide > 1 && setSlide(currentSlide - 1)
  }

  const nextSlide = () => {
    currentSlide < 12 && setSlide(currentSlide + 1)
  }
  
  return (
    <AppContainer>
      <AppStyles/>
      <Slides slide={currentSlide}/>
      <Controls>
        <ControlButton onClick={prevSlide}>
          <MdKeyboardArrowLeft size="4rem"/>
        </ControlButton>
        <ControlButton onClick={nextSlide}>
          <MdKeyboardArrowRight size="4rem"/>
        </ControlButton>
      </Controls>
    </AppContainer>
  )
}