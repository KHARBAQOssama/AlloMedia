import { useState } from "react";
import { useUser } from "../../contexts/userContext";
import { useFormik } from 'formik';
import { registerSchema } from "../../schemas/AuthForms";


const SignUp = () => {
  const onSubmit = (values,actions) => {
    console.log(values, actions);
  }
  const formik = useFormik({
    initialValues : {
      email : "",
      full_name : "",
      password : "",
      password_confirmation : ""
    },
    validationSchema: registerSchema,
    onSubmit
  });
  // const {user, setUser, register} = useUser();
  const [role, setRole] = useState('Client');

  const handleRoleChange = e => {
    setRole(e.target.value);
  };




  return (
    <div className="w-full h-full flex flex-col gap-2 max-w-screen-xl">
        <h3 className="text-white font-bold text-3xl">Register</h3>
        <form onSubmit={formik.handleSubmit} action="" className="bg-white W-full p-16 rounded-2xl flex flex-col gap-6">
              
          {formik.errors.full_name && <div className="text-red-400 w-full text-start leading-3">{formik.errors.full_name}</div>}
            <input 
              type="text"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="full_name"
              className={formik.errors.full_name ? "invalid bg-red-300" : ""}
              // onChange={()=>{handleFullNameChange(event)}}
              placeholder="Full Name"
              />
            {formik.errors.email && <div className="text-red-400 w-full text-start leading-3">{formik.errors.email}</div>}
            <input 
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              name="email"
              className={formik.errors.email ? "invalid bg-red-300" : ""}
              // onChange={()=>{handleEmailChange(event)}} 
              placeholder="Email"
              />
            <div className="flex gap-3 w-full">
                <input className="hidden"  type="radio" value="Client" id="client-check" checked={role === 'Client'} 
                onChange={handleRoleChange}/>
                <label className={role + " flex-1 text-center bg-slate-50 cursor-pointer hover:bg-brand-80 transition-all checked-client rounded-lg py-3 text-brand "}  htmlFor="client-check">Client</label>

                <input className="hidden" type="radio" value="DeliveryMan" id="delivery-check" checked={role === 'DeliveryMan'} 
                onChange={handleRoleChange}/>

                <label className={role + " flex-1 text-center bg-slate-50 cursor-pointer hover:bg-brand-80 transition-all checked-delivery rounded-lg py-3 text-brand "} htmlFor="delivery-check">Delivery Man</label>
            </div>
            {formik.errors.password && <div className="text-red-400 w-full text-start leading-3">{formik.errors.password}</div>}
            <input 
              type="password" 
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              className={formik.errors.password ? "invalid bg-red-300" : ""}
              // onChange={()=> handlePasswordChange(event)} 
              placeholder="Password"/>
            {formik.errors.password_confirmation && <div className="text-red-400 w-full text-start leading-3">{formik.errors.password_confirmation}</div>}
            <input 
              type="password" 
              // onChange={()=> handlePasswordConfirmationChange(event)}  
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password_confirmation"
              className={formik.errors.password_confirmation ? "invalid bg-red-300" : ""}
              placeholder="Repeat Password"/>
            <button type="submit" className="w-full text-white bg-brand">Register</button>
        </form>
    </div>
  )
}

export default SignUp