import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// import './App.css'
import LandingPage from "./views/pages/LandingPage";
import RootLayout from "./views/RootLayout";
import Login from "./views/signPages/Login";
import SignUp from "./views/signPages/SignUp";
import RegisterSuccess from "./views/pages/RegisterSuccess";
import { useUser } from "./contexts/userContext";
import Profile from "./views/pages/Profile";
import VerifyEmail from "./views/pages/VerifyEmail";
import ResetPassword from "./views/pages/ResetPassword";
import ForgetPassword from "./views/pages/ForgetPassword";

function App() {
  const {user} = useUser();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={!user._id ? <Login/> : <Navigate to={'/me'}/>} />
        <Route path="/register" element={!user._id ? <SignUp/> : <Navigate to={'/me'}/>} />
        <Route path="/registerSuccess" element={<RegisterSuccess/>}/>
        <Route path="/me" element={user._id ? <Profile/> : <Navigate to={'/login'}/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
