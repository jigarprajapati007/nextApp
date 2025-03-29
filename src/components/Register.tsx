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

interface Props {
  countryCodes: any;
}
export const Register = (props: Props) => {
  let userSchema = object({
    name: string().required("Name is required"),
    email: string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    contact: string().required("Contact is required"),
    imgUrl: string().required("Profile is required"),
    gender: string().required("Please select gender"),
  });

  const { countryCodes } = props;
  const [showPass, setShowPass] = useState<string>("password");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [image, setImage] = useState<any>();
  const [value, setValue] = useState("");
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="reg-main-div">
      <Picture />
      <div className="sub-div">
        <h1 className="header-reg">Welcome To Adventure Park </h1>
        <h2 className="header-reg-1">! Register Yourself !</h2>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            name: "",
            email: "",
            password: "",
            contact: "",
            imgUrl: "",
            gender: "",
          }}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldError,
            setErrors,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="form-reg">
              <div
                className="sub-div-1"
                style={{ width: "48%", display: "block", marginRight: "10px" }}
              >
                <h1 className="h1-reg">Name:</h1>
                <Input
                  placeholder="Name"
                  className="input-field"
                  style={{ height: 55 }}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="p-tag-msg">{errors.name}</p>
              </div>

              <div
                className="sub-div-1"
                style={{ width: "48%", display: "block", marginRight: "10px" }}
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
                style={{ width: "50%", display: "block" }}
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

              <div
                className="sub-div-1 contact-input"
                style={{ width: "100%" }}
              >
                <h1 className="h1-reg">Contact:</h1>
                <Select
                  placeholder=""
                  value={countryCode}
                  size="md"
                  className="input-field contact-no"
                  onChange={(e) => {
                    setCountryCode(e.target.value);
                  }}
                  style={{ cursor: "pointer", height: 55 }}
                >
                  {countryCodes &&
                    countryCodes?.map((item: { code: string; id: number }) => {
                      return (
                        <option key={item.id} value={item.code}>
                          {item.code}
                        </option>
                      );
                    })}
                </Select>
                <Input
                  name="contact"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  placeholder="Number"
                  className="input-field number-input"
                  style={{ height: 55 }}
                />
              </div>
              <p className="p-tag-msg">{errors.contact}</p>
              <div
                className="sub-div-1"
                style={{
                  width: "100%",
                  position: "relative",
                  marginLeft: "270px",
                }}
              >
                <h1 className="h1-reg">Select Profile:</h1>
                <div className={image ? "profile-div-after" : "profile-div"}>
                  <img
                    width="30"
                    height="10"
                    src={
                      image || "https://img.icons8.com/ios/50/camera--v1.png"
                    }
                    alt="camera--v1"
                  />
                  <Input
                    type="file"
                    className="upload-reg input-field"
                    accept=".png,.jpg,.jpeg,.bmp"
                    onChange={(e) => onImageChange(e)}
                    placeholder="Number"
                    name="imgUrl"
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <p className="p-tag-msg">{image ? "" : errors.imgUrl}</p>
              <div
                className="sub-div-1"
                style={{
                  width: "100%",
                  position: "relative",
                  marginLeft: "190px",
                  marginBottom: "0px",
                  marginTop: 8,
                }}
              >
                <h1
                  style={{
                    marginLeft: 7,
                    marginRight: 7,
                    color: "cadetblue",
                    fontSize: 18,
                  }}
                  className="gender-h1"
                >
                  Gender:
                </h1>
                <RadioGroup
                  onChange={(e) => {
                    setValue(e);
                    setFieldError("gender", undefined);
                  }}
                  value={value}
                  className="radio-reg"
                  name="gender"
                >
                  <Stack direction="row">
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                    <Radio value="other">Other</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <p className="p-tag-msg">{errors.gender}</p>
              <div className="div-btn-reg">
                <Button colorScheme="blue" type="submit" className="submit-reg">
                  Submit
                </Button>
              </div>
              <Link
                href="/account/login"
                type="button"
                onClick={() => {
                  setErrors({});
                }}
                className="link-btn"
              >
                Login
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
