import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from "react-helmet"
import './index.css'
import App from './app.jsx'

ReactDOM.render(
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Markdown Previewer</title>
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
)
