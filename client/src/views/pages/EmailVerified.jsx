import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts/userContext"

const EmailVerified = () => {
const {user} = useUser();

  return (
    <div>
        you have successfully verified your account 
        {user._id && <NavLink to={'/me'}><button>go to profile</button></NavLink>}
        {!user._id && <NavLink to={'/login'}><button>login</button></NavLink>}
    </div>
  )
}

export default EmailVerified