import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css'
import LandingPage from './views/LandingPage';
import RootLayout from './views/RootLayout';
import Login from './views/signPages/Login';
import SignUp from './views/signPages/SignUp';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<LandingPage/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<SignUp/>}/>
      </Route>
    </Route>
  )
) 
function App() {
  
  return (

      <RouterProvider router={router}/>
  )
}

export default App
