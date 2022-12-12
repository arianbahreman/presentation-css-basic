import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app"

document.addEventListener('DOMContentLoaded', () => {

  const root = createRoot(
    document.querySelector('main')
  )

  root.render(<App/>)
})

const setWindowHeight = () => {
  document.documentElement.style.setProperty("--window-height", `${window.innerHeight}px`)
}

window.addEventListener('load', setWindowHeight)
window.addEventListener("resize", setWindowHeight)