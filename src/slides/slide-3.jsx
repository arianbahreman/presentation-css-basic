import React from "react"
import Slide from "../components/slide"
import { Heading, Title, List, ListItem, Text, Section, Container } from "../styles/app.styles"

const Slide3 = () => {
  return (
    <Slide>
      <Section>
        <Container>
          <Heading>Core concept of Display property</Heading>
          <Text>Every HTML element has a display property, which controls how HTML elements are shown on a web page.</Text>
          <div className="pt-m">
            <Title>The most popular and commonly used display types:</Title>
            <List>
              <ListItem>
                <Text>Inline</Text>
              </ListItem>
              <ListItem>
                <Text>Inline-Block</Text>
              </ListItem>
              <ListItem>
                <Text>Block</Text>
              </ListItem>
              <ListItem>
                <Text>Table</Text>
              </ListItem>
              <ListItem>
                <Text>Flex</Text>
              </ListItem>
              <ListItem>
                <Text>Grid</Text>
              </ListItem>
              <ListItem>
                <Text>None</Text>
              </ListItem>
            </List>
          </div>
        </Container>
      </Section>
    </Slide>
  )
}

export default Slide3
