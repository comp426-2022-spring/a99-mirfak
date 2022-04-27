import React from "react"
import ReactDom from "react-dom"
import App from "./app"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)