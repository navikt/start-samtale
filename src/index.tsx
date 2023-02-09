import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

console.log(import.meta.env)

if (import.meta.env.DEV) {
  import("./mock").then(() =>
    ReactDOM.render(<App />, document.getElementById("root"))
  )
} else {
  ReactDOM.render(<App />, document.getElementById("root"))
}

if (import.meta.env.PROD) {
  import("./components/util/amplitude-utils").then((amplitude) =>
    amplitude.initAmplitude()
  )
}
