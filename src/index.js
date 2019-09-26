import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
  return (
    <div className="container">
      <h1>useDataApi</h1>
      <App />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Main />, rootElement)
