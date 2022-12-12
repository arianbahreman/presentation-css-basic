import React from "react"
import Slide from "../components/slide"
import { Container, Section } from "../styles/app.styles"
import { Hi } from "../styles/slides/slide-1"

const Slide1 = () => {

  return (
    <Slide>
      <Section alignment="center">
        <Container>
          <Hi>Hello</Hi>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide1