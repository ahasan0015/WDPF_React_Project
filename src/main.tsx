import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/pages/Dashboard'
import Products from './components/pages/Products'
import 'boxicons/css/boxicons.min.css';
import Error from './components/pages/Error'


const links = createBrowserRouter([
  {
    path:'/',element:<Layout/>,
    children:[
      {index:true, element:<Dashboard/>},
      {path:'/dashboard', element:<Dashboard/>},
      {path:'/products', element:<Products/>},
      {path:'/category', element:<h1>Catagory</h1>},
      {path:'/users', element:<h1>Users</h1>},
      {path:'/rolls', element:<h1>Rolls</h1>},
    ] 
  },

  { path: '/login', element: <h1> Login </h1> },
  { path: '/pos', element: <h1>Pos</h1> },
  { path: '*', element: <Error/> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={links}/>
  </StrictMode>,
)
