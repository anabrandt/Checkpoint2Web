import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import VisualizarAparelho from './routes/VisualizarAparelho/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import Branco from './routes/Branco/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Visualizaraparelho',
        element: <VisualizarAparelho/>
      },
      {
        path:'/Branco',
        element: <Branco/>        
      },
      {
        path:'/Aparelhos',
        element: <Aparelhos/>        
      },      
      {
        path: '/antiga',
        element: <Navigate to='/'/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
