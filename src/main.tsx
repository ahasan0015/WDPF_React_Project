import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Dashboard from './components/pages/Dashboard'
import 'boxicons/css/boxicons.min.css';
import Error from './components/pages/Error'
import ManageFlight from './components/pages/manageflight/ManageFlight'
import AddNewFlight from './components/pages/manageflight/AddNewFlight'
import ManageAirlines from './components/pages/airlines/ManageAirlines'
import AddAirlines from './components/pages/airlines/AddAirlines'
import ManageUsers from './components/pages/users/ManageUsers'
import CreateUser from './components/pages/users/CreateUsers'
import ManageRoles from './components/pages/rolls/ManageRolls'
import CreateRole from './components/pages/rolls/CreateRolls'
import ViewAirports from './components/pages/airports/ViewAirports'
import AddAirport from './components/pages/airports/AddAirports'
import ManagePost from './components/pages/post/Managepost'
import CreatePost from './components/pages/post/CreatePost'






const links = createBrowserRouter([
  {
    path:'/',element:<Layout/>,
    children:[
      {index:true, element:<Dashboard/>},
      {path:'/flight-management', element:<ManageFlight/>},
      {path:'/flight-add', element:<AddNewFlight/>},
      {path:'/manage-airlines', element:<ManageAirlines/>},
      {path:'/add-airlines', element:<AddAirlines/>},
      {path:'/users', element:<ManageUsers/>},
      {path:'/users/create', element:<CreateUser/>},
      {path:'/roles', element:<ManageRoles/>},
      {path:'/roles/create', element:<CreateRole/>},
      {path:'/view/airports', element:<ViewAirports/>},
      {path:'/add/airports', element:<AddAirport/>},
      {path:'/post', element:<ManagePost/>},
      {path:'/create/post', element:<CreatePost/>}





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
