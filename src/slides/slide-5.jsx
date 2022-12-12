import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide5 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Block</Heading>
          <Text>Element starts on a new line and takes up the entire width. Also, width and height properties can be set here.</Text>
          <div className="pt-m">
            <Image src="./assets/block.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide5