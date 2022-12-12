import React from "react"
import Image from "../components/image"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide7 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Table</Heading>
          <Text>Display table makes the element behave like a table. So you can make a replica of an HTML table without using the table element and corresponding elements such as tr and td.</Text>
          <div className="pt-m">
            <Image src="./assets/table.png" maxHeight="35rem"/>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide7