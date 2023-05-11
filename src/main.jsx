import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '../src/router/router.jsx'
import { Provider } from 'react-redux'

import store from './store/store.jsx' 
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store ={store}>
        <RouterProvider router={routes} />
    </Provider>,

)
//el enrutador tiene que ser hgijo del almacenamient ode estados globales para que 
//cada interfaz del enrutador pueda acceder a los estados globales de redux