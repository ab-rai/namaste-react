import React from "react"
import  ReactDOM  from "react-dom/client"
const helloHeading = React.createElement('h1',{},'Hello Using ReactJS!!')
const rootElement = ReactDOM.createRoot(document.getElementById('root-id'))
rootElement.render(helloHeading)