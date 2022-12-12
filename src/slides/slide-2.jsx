import React from "react"
import Slide from "../components/slide"

import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide2 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Web layout implementation</Heading>
          <Title>An introduction to basic CSS layout properties</Title>
          <List>
            <ListItem>
              <Text>Display</Text>
            </ListItem>
            <ListItem>
              <Text>Pseudo Elements</Text>
            </ListItem>
          </List>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide2