import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/log.png";

function Login(props) {
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   // toggle show passowrd
   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   //check login details
   function checkLogin(e) {
      e.preventDefault();

      let password = document.getElementById("password");
      let username = document.getElementById("username");

      if (
         username.value === props.userName &&
         password.value === props.password
      ) {
         props.setShowAlert(true);
         props.setIsLoged(true);
         setTimeout(() => {
            navigate("/");
         }, 2000);
      } else if (username.value === "" && password.value === "") {
         props.setShowAlert(false);
         props.setIsLoged(false);
      } else {
         props.setShowAlert(true);
         props.setIsLoged(false);
      }
   }

   return (
      <div className="login-form paddin-x w-100 h-100 center">
         <form action="" className="center column">
            <div className="w-100 center column title">
               <div className="logo-black">
                  Medi<span>Care</span>
               </div>
               <small>We are here to help you</small>
            </div>
            <div className="w-100">
               <input
                  type="text"
                  id="username"
                  className="w-100"
                  placeholder=""
                  required
               />
               <label htmlFor="username">Username</label>
            </div>
            <div className="w-100">
               <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="password"
                  className="w-100"
                  placeholder=""
                  required
               />
               <label htmlFor="password">Password</label>
               <div className="icon">
                  {showPassword ? (
                     <i
                        className="bi bi-eye-fill"
                        onClick={toggleShowPassword}
                     ></i>
                  ) : (
                     <i
                        className="bi bi-eye-slash-fill"
                        onClick={toggleShowPassword}
                     ></i>
                  )}
               </div>
            </div>
            <div className="w-100">
               <input
                  type="submit"
                  value="Sign In"
                  className="w-100"
                  id="sign-in"
                  onClick={checkLogin}
               />
            </div>
            <div className="w-100 between or">
               <span></span>
               <p>or</p>
               <span></span>
            </div>
            <div className="w-100">
               <Link to="/register">
                  <input
                     type="submit"
                     value="Sign Up"
                     className="w-100"
                     id="sign-up"
                  />
               </Link>
            </div>
         </form>
      </div>
   );
}

export default Login;
