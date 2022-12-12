import React from "react"
import { Section } from "../styles/app.styles"
import { SlideContainer } from "../styles/slide.styles"

const Slide = ({ children }) => {
  return (
    <SlideContainer>
      {children}
    </SlideContainer>
  )
}

export default Slide