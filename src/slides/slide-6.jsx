import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide6 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Inline-Block</Heading>
          <Text>Element is formatted as an inline element, but you can apply block properties, like height and width.</Text>
          <div className="pt-m">
            <Image src="./assets/inline-block.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide6