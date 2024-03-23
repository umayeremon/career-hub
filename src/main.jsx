import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import JobDetails from './components/JobDetails/JobDetails'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/appliedJobs',
        element:<AppliedJobs/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/job/:id',
        element: <JobDetails/>,
        loader: ()=> fetch('../jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
