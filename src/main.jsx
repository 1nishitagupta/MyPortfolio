import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Home/>
  </BrowserRouter>
)
