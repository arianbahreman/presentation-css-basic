import React from "react"
import Slide from "../components/slide"
import LinkQrCode from "../components/link-qr-code"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const SlideFinal = () => {
  return (
    <Slide>
      <Section alignment="center">
        <Container textAlign="center">
          <Heading>Thank You</Heading>
          <Text>Presentation source code is available here:</Text>
          <LinkQrCode/>
        </Container>
      </Section>
    </Slide>
  )
}

export default SlideFinal