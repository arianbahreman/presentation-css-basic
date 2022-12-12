import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, Mark, Text, Section, Container } from "../styles/app.styles"

const Slide11 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Pseudo Elements</Heading>
          <Text>The CSS <Mark>:before</Mark> and <Mark>:after</Mark> properties are what also known as pseudo elements. They are used to add something before or after the content of an element. There are a lot of great uses for these pseudo elements, so let’s explore some of them.</Text>
          <div className="pt-m">
            <Image src="./assets/pseudo.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide11