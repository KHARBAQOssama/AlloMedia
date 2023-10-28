import { NavLink, useNavigate } from "react-router-dom"
import { useUser } from "../../contexts/userContext"
import { useEffect } from "react";

const Navbar = () => {
    const {user, logout,getUser} = useUser();
    const navigate = useNavigate();
    const handleLogout = async()=>{
        let response = await logout();
        if(response.status == 200){
            getUser()
            navigate("/");
        }
            
    }
  return (
    <div className="p-12 bg-slate-600 text-white flex justify-between items-center">
        navbar 
        <div className="flex gap-4 items-center">
            {!user._id && <NavLink to={'/login'}>
                <button className="rounded-md text-brand ms-20 px-3 py-2 mx-1 bg-white">
                    login
                </button>
            </NavLink>}
            {!user._id && <NavLink to={'/register'}>
                <button className=" rounded-md text-brand px-3 py-2 mx-1 bg-white">
                    signUp
                </button>
            </NavLink>}

            {user._id && <div>{user.full_name}</div>}
            {user._id && <button onClick={handleLogout}>logout</button>}
            {user._id &&  <NavLink to={'/me'}>
                <button className=" rounded-md text-brand px-3 py-2 mx-1 bg-white">
                    Profile
                </button>
            </NavLink>}
        </div>
        
    </div>
  )
}

export default Navbar