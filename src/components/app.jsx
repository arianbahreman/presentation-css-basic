import React, { useState } from "react"
import { AppStyles, AppContainer } from "../styles/app.styles"
import Slides from "./slides"

export default () => {

  const [currentSlide, setSlide] = useState(1)

  document.addEventListener('click', () => {
    setSlide(currentSlide + 1)
  })

  return (
    <AppContainer>
      <AppStyles/>
      <Slides slide={currentSlide}/>
    </AppContainer>
  )
}