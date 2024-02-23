import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from 'react-scroll-to-top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollToTop smooth color='#4caf4f' style={{paddingLeft: "6px"}} title='GO TO TOP' />
    <App />
  </React.StrictMode>,
)
