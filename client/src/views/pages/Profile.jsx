import { useState } from "react";
import { useUser } from "../../contexts/userContext"

const Profile = () => {
    const {user , sendVerification} = useUser();
    const [verificationSent, setVerificationSent] = useState(false);
    const doSendVerification = async ()=>{
        let response = await sendVerification();
        if(response.status == 200) setVerificationSent(true)
    }
  return (
    <div>
        Hello {user.full_name}
        {!user.isVerified && !verificationSent && <div>
            you should verify your account <br/>           
            <button onClick={doSendVerification} className="bg-green-300 text-white p-3 m-3">
                send email verification
            </button>
        </div>}
        {!user.isVerified && verificationSent && <div>
            check your email
        </div>}
        {user.isVerified && <div>
            your account is verified 
            <br/>
        </div>}
    </div>
  )
}

export default Profile