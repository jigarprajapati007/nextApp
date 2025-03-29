import { Picture } from "@/components/Picture";
import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Input,
  Select,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { object, string } from "yup";
import Link from "next/link";


export const Login = () => {
  let userSchema = object({
    email: string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const [showPass, setShowPass] = useState<string>("password");
  
  return (
    <div className="reg-main-div">
      <Picture />
      <div className="sub-div">
        <h1 className="header-reg">Welcome To Adventure Park </h1>
        <h2 className="header-reg-1">! Login Yourself !</h2>
        <Formik
          initialValues={{
            email: "",
            password: "", 
          }}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting }) => {
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}  style={{ marginTop:100}}>
              <div
                className="sub-div-1"
                style={{ width: "50%", display: "block", margin: "auto" }}
              >
                <h1 className="h1-reg">Email:</h1>
                <Input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  style={{ height: 55 }}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="p-tag-msg">{errors.email}</p>
              </div>
              <div
                className="sub-div-1"
                style={{ width: "50%", display: "block", margin: "auto" }}
              >
                <h1 className="h1-reg">Password:</h1>
                <InputGroup>
                  <InputRightElement
                    style={{ marginTop: 8 }}
                    children={
                      showPass === "password" ? (
                        <img
                          width="20"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowPass("text")}
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                          alt="visible"
                        />
                      ) : (
                        <img
                          width="20"
                          height="20"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowPass("password")}
                          src="https://img.icons8.com/ios-glyphs/30/hide.png"
                          alt="hide"
                        />
                      )
                    }
                  />
                  <Input
                    type={showPass}
                    placeholder="Password"
                    className="input-field"
                    style={{ height: 55 }}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                <p className="p-tag-msg">
                  {touched.password && errors.password ? errors.password : ""}
                </p>
              </div>
              <div className="div-btn-login">
                <Button colorScheme="blue" type="submit" className="submit-reg">
                  login
                </Button>
              </div>
              <Link
                style={{display:'block',margin:'auto',marginTop:'100px'}}
                href="/account/register"
                type="button"
                
                className="link-btn"
              >
                Register
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
