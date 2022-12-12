import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide10 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>None</Heading>
          <Text>The element will be hidden and the page will be displayed as if the element is not there.</Text>
          <div className="pt-m">
            <Image src="./assets/none.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide10