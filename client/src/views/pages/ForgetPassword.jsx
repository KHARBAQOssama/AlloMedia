import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useUser } from "../../contexts/userContext";
import { forgetPasswordSchema } from "../../schemas/AuthForms";

const ForgetPassword = () => {
  const { user, setUser, forgetPassword } = useUser();
  const [submitIt, setSubmitIt] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (values, actions) => {
    setUser({
      email: values.email,
    });
    setSubmitIt(true);
  };

  useEffect(() => {
    if (submitIt) handleSubmition();
  }, [submitIt]);

  const handleSubmition = async () => {
    console.log("something");
    let response = await forgetPassword();

    if (response.status != 200) {
      setMessage("something went wrong");
    } else {
      setSubmited(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordSchema,
    onSubmit,
  });
  return (
    <div>
      ForgetPassword
      {!submited && (
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="bg-white W-full p-16 rounded-2xl flex flex-col gap-6"
        >
          {message && (
            <div className=" text-red-700 bg-red-200 p-2 border border-red text-center text-bold  w-full leading-3">
              {message}
            </div>
          )}
          {formik.errors.email && (
            <div className="text-red-400 w-full text-start leading-3">
              {formik.errors.email}
            </div>
          )}
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            className={formik.errors.email ? "invalid bg-red-300" : ""}
            placeholder="Email"
          />

          <button type="submit" className="w-full text-white bg-brand">
            submit
          </button>
        </form>
      )}
      {submited && <div>Email sent successfully</div>}
    </div>
  );
};

export default ForgetPassword;
