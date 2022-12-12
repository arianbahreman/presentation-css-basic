import styled, { createGlobalStyle, css } from "styled-components"

export const AppStyles = createGlobalStyle`
  html {
    width: 100%;
    height: var(--window-height);
    font-size: 1vh;
  }
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  main {
    width: 100%;
    height: 100%;
  }
  .pt-s {
    padding-top: 2rem;
  }
  .pt-m {
    padding-top: 5rem;
  }
  .pt-l {
    padding-top: 10rem;
  }
`

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

const sectionAlignment = ({ alignment = "auto" }) => {
  switch(alignment) {
    case "center":
      return css`
        align-items: center;
        justify-content: center;
      `
  }

  return null
}

export const Section = styled.div`
  display: flex;
  padding: 80px;
  height: 100%;
  box-sizing: border-box;
  ${props => sectionAlignment(props)}
`

export const Container = styled.div`
  display: block;
  width: 100%;
  text-align: ${props => props.textAlign || "inherit"};
`

export const Heading = styled.h1`
  display: block;
  margin: 0;
  font-size: 8rem;
  font-family: "Petit Formal Script";
`

export const Title = styled.h2`
  display: block;
  margin: 0;
  font-family: "Roboto Slab";
  font-size: 6rem;
  font-weight: 800;
`

export const Text = styled.div`
  display: inline-block;
  margin: 0;
  font-family: "Roboto Slab";
  font-size: 3rem;
  font-weight: 400;
`

export const Mark = styled.span`
  color: #FF6F76;
`

export const List = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  position: relative;
  display: block;
  
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #000;
  }
  & > * {
    vertical-align: middle;
    text-indent: 2rem;
  }
`

export const Controls = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
`

export const ControlButton = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  border-radius: 2rem;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  transition: background-color .5s;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
  svg {
    display: block;
  }
`