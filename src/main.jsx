import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '../src/router/router.jsx'
import { Provider } from 'react-redux'
import  store from './store/store.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
    < Provider store={store}>
    <RouterProvider router={routes} />
     </ Provider> 
)

    //el enrutador tine que ser hijo del almacenamiento de estados globales 
    //para que cada interfaz del enrutador puede acceder a los estados globales de redux