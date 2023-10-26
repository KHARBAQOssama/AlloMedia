import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email : yup.string().email("Please enter a valid email").required("email is required"),
    full_name : yup.string().required("full name is required"),
    password : yup.string().min(6).required("Password is required"),
    password_confirmation : yup.string().oneOf([yup.ref('password'),null],"Passwords do not match").required("Password is required")
})

export const loginSchema = yup.object().shape({
    email : yup.string().email("Please enter a valid email").required("email is required"),
    password : yup.string().min(6).required("Password is required"),
})  