import React, { useEffect } from "react";     
import {
  Grid,
  Card,
  TextField,
  Checkbox,
  Button,
  CardContent,
  Link,
  Input,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { useState } from "react";
import { Form } from "reactstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export const Login = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({ email: null, password: null });
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({ email: null, password: null })
    console.log("form value", formValues);
    let errorCheck = false;
    if (!formValues.email && formValues.email=== "") {
      setFormErrors(pv => ({ ...pv, email: "Username is required" }));
      errorCheck = true;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(formValues.email)) {
        setFormErrors(pv => ({ ...pv, email: "Invalid Username" }))
        errorCheck = true;
      }
    }
    if (!formValues.password ) {
      setFormErrors(pv => ({ ...pv, password: "Please fill password." }))
      errorCheck = true;
    };
    // if (errorCheck) {

    //   alert("Fix error");
    //   return;
    // }

    axios.post("http://localhost:5000/login",formValues )
      .then(res => {
        console.log("Res", res);
        if (res.data === "Success"  ) {
          
          toast.success("Welcome User ");
          
          navigate("/dashboard");
        } 
        if(res.data === "No User exist"){
          toast.error('Incorrect username or Password');
        }
        
      })
      .catch(err => console.log("Error logging user", err))


  };

  return (
    <React.Fragment>
      <div
        style={{
          background:
            "linear-gradient(180deg, #054B90 0%, #2D99C7 43.23%, #39B0D7 56.42%,#3DB9DD 61.10%, #3EBADE 61.11%, #41C0E2 64.24%, #31BDDE 71.01%, #31BEDE 71.02%, #32C1E0 81.94%, #3BB8E4 86.98%, #53A0EC 100%)",
          display: "flex",
          justifyContent: "right",
        }}
        className="vh-100"
      >
          <div>
          <img src="./down_logo.png" alt="down-logo" width= "356px"
          height= "125px" style={{position:"absolute", marginRight:"290px", marginTop:"440px",marginLeft:"-405px"}}
           />
           </div>
      <div>
        <p style={{position:"absolute", marginTop:"487px",marginLeft:"-200px"}}>Developed by</p>
        <p style={{color:"white", position:"absolute", marginTop:"507px",marginLeft:"-206px"}}>QualyTrust IT Services, India</p>
      </div>
      <div className="d-flex justify-content-center align-items-center  p-2" >
      <img src="./fantasy.png" alt="downlogo" style={{ position:"absolute", width: "100px", height:"100px", marginRight:"400px"}} />
      
      </div>
      <Card  sx={{
        width: "610px",
        borderRadius: "15px",
        height: "380px",
        margin: "95px 100px 0px 0px ",
        backgroundColor: "white",
      }}>
        <CardContent
         
        >
          <Form action="">
            <Grid container spacing={2}>
              <Grid item xs={12} align="left">
                <h1> Sign in to get started</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  fullWidth
                  onChange={handleChange}
                >

                </TextField>
                <Grid item xs={12}>
                {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                </Grid>
                </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  // type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  fullWidth
                  onChange={(e) => handleChange(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                >

                </TextField>
                <Grid item xs ={12}>
                {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                
                </Grid>
                </Grid>
              {/* <Grid item xs={12}> */}
              <Grid item xs={6}>
                <Checkbox></Checkbox>
                <label>Keep me login</label>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Link color="#000">Forgot Password</Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  //  type='submit'
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Form>
        </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};


// import React, { useEffect } from "react";
// import {
//   Grid,
//   Card,
//   TextField,
//   Checkbox,
//   Button,
//   CardContent,
//   Link,
//   Input,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";

// import { useState } from "react";
// import { Form } from "reactstrap";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({ email: null, password: null });
//   const [formValues, setFormValues] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors({ email: null, password: null });
//     console.log("form value", formValues);
//     let errorCheck = false;
//     if (!formValues.email && formValues.email === "") {
//       setFormErrors((pv) => ({ ...pv, email: "Username is required" }));
//       errorCheck = true;
//     } else {
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//       if (!regex.test(formValues.email)) {
//         setFormErrors((pv) => ({ ...pv, email: "Invalid Username" }));
//         errorCheck = true;
//       }
//     }
//     if (!formValues.password) {
//       setFormErrors((pv) => ({ ...pv, password: "Please fill password." }));
//       errorCheck = true;
//     }
//     // if (errorCheck) {
//     //   alert("Fix error");
//     //   return;
//     // }

//     axios
//       .post("http://localhost:5000/login", formValues)
//       .then((res) => {
//         console.log("Res", res);
//         if (res.data === "Success") {
//           toast.success("Welcome User ");
//           navigate("/dashboard");
//         }
//         if (res.data === "No User exist") {
//           toast.error("Incorrect username or Password");
//         }
//       })
//       .catch((err) => console.log("Error logging user", err));
//   };

//   return (
//     <React.Fragment>
//       <div
//         style={{
//           background:
//             "linear-gradient(180deg, #054B90 0%, #2D99C7 43.23%, #39B0D7 56.42%,#3DB9DD 61.10%, #3EBADE 61.11%, #41C0E2 64.24%, #31BDDE 71.01%, #31BEDE 71.02%, #32C1E0 81.94%, #3BB8E4 86.98%, #53A0EC 100%)",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "610px",
//             margin: "0 20px",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <img
//               src="down_logo.png"
//               alt="down-logo"
//               width="356px"
//               height="125px"
//             />
//           </div>
//           <p style={{ textAlign: "center", color: "white" }}>
//             Developed by QualyTrust IT Services, India
//           </p>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "30px",
//             }}
//           >
//             <img
//               src="fantasy.png"
//               alt="logo"
//               style={{ width: "250px", height: "200px" }}
//             />
//           </div>
//           <Card
//             sx={{
//               borderRadius: "15px",
//               backgroundColor: "white",
//               position:'relative',
//               // marginLeft: "100px",
            
//             }}
//           >
//             <CardContent>
//               <Form action="">
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <h1 style={{ textAlign: "center" }}>
//                       Sign in to get started
//                     </h1>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       variant="outlined"
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       value={formValues.email}
//                       fullWidth
//                       onChange={handleChange}
//                     />
//                     <span className="text-danger">{formErrors.email}</span>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       variant="outlined"
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Password"
//                       value={formValues.password}
//                       fullWidth
//                       onChange={(e) => handleChange(e)}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton onClick={togglePasswordVisibility}>
//                               {showPassword ? (
//                                 <VisibilityOff />
//                               ) : (
//                                 <Visibility />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                     <span className="text-danger">{formErrors.password}</span>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Checkbox />
//                     <label>Keep me login</label>
//                   </Grid>
//                   <Grid item xs={6} style={{ textAlign: "end" }}>
//                     <Link color="#000">Forgot Password</Link>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       variant="outlined"
//                       fullWidth
//                       onClick={(e) => handleSubmit(e)}
//                     >
//                       Sign in
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
