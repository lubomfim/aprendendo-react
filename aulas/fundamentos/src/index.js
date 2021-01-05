import './index.css' // import relativo, pois só precisamos do arquivo
import ReactDom from 'react-dom' 
import React from 'react'
import App from './App'

ReactDom.render(
  <App/>,
   document.getElementById('root')
)