import React from "react"
import styled from "styled-components"

const getMargin = alignment => {
  switch(alignment) {
    case "left":
      return "0 auto 0 0"
    case "right":
      return "0 0 0 auto"
    case "center":
    default:
      return "0 auto"
  }
}

const Img = styled.img`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  margin: ${props => getMargin(props.alignment)};
`

const Image = (
  {
    src,
    width = "auto",
    height = "auto",
    maxHeight = "auto",
    maxWidth = "auto",
    alignment = "center"
  }
) => {
  return (
    <Img
      src={src}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      alignment={alignment}
    />
  )
}

export default Image