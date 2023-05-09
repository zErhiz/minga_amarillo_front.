import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '../src/router/router.jsx'
/* import { Provider } from 'react/index.js'
import { Store } from '@reduxjs/toolkit' */

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)

{/* < Provider Store>
    </ Provider> */}