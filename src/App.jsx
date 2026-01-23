import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './components/HomePage/HomePage'
import AboutUsPage from './components/AboutUsPage/AboutUsPage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import OffersPage from './components/OffersPage/OffersPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {
  
  let routes = createBrowserRouter([{
    path:'', element:<Layout/>,children:[
      {index:true, element:<HomePage/>},
      {path:'home', element:<HomePage/>},
      {path:'aboutus', element:<AboutUsPage/>},
      {path:'services', element:<ServicesPage/>},
      {path:'offers', element:<OffersPage/>},
      {path:'contact', element:<ContactPage/>},
    ]
  }])

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
