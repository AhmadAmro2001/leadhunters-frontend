import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './components/HomePage/HomePage'
import AboutUsPage from './components/AboutUsPage/AboutUsPage'
import ServicesPage from './components/ServicesPage/ServicesPage'

function App() {
  
  let routes = createBrowserRouter([{
    path:'', element:<Layout/>,children:[
      {index:true, element:<HomePage/>},
      {path:'home', element:<HomePage/>},
      {path:'aboutus', element:<AboutUsPage/>},
      {path:'services', element:<ServicesPage/>},
    ]
  }])

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
