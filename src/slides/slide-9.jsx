import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide9 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Grid</Heading>
          <Text>Grid is a new way to create two-dimensional layouts based on a template.</Text>
          <div className="pt-m">
            <Image src="./assets/grid.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide9