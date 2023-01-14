import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import './App.css'
import 'react-tooltip/dist/react-tooltip.css'

import { Home, Engineering, Gaming, Music, Layout } from './pages'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Outlet />,
        // errorElement: <RootErrorBoundary />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'engineering',
            element: <Engineering />,
          },
          {
            path: 'gaming',
            element: <Gaming />,
          },
          {
            path: 'music',
            element: <Music />,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} /* fallbackElement={<Fallback />} */ />
}

export default App
