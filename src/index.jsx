import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app"

document.addEventListener('DOMContentLoaded', () => {

  const root = createRoot(
    document.querySelector('main')
  )

  root.render(<App/>)
})

window.addEventListener('load', () => {
  
  document.documentElement.style.setProperty("--window-height", `${window.innerHeight}px`)
})