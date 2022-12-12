import styled from "styled-components"

export const  SlidesWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const SlidesContainer = styled.ul.attrs(({slide = 1}) => ({ index: slide -1 }))`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 1.4s cubic-bezier(0.83, 0, 0.17, 1);
  transform: translate3d(0, ${props => ((props.index) * -100)}%, 0);
`