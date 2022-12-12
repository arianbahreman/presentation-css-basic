import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide4 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Inline</Heading>
          <Text>Element can start anywhere on an existing line. Take only as much space as they need. Height, width and top-bottom margin properties will have no effect.</Text>
          <div className="pt-m">
            <Image src="./assets/inline.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide4