import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import Logo from "../../assets/log.png";

function Register(props) {
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   //toggle show password
   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   // Store values and check password
   function register(e) {
      e.preventDefault();

      let email_i = document.getElementById("email").value;
      let username_i = document.getElementById("username").value;
      let password_i = document.getElementById("password").value;
      let c_password_i = document.getElementById("c-password").value;

      if (password_i === c_password_i) {
         props.setEmail(email_i);
         props.setUserName(username_i);
         props.setPassword(password_i);
         props.setShowRegAlert(true);
         props.setIsRegistered(true);
         setTimeout(() => {
            navigate("/login");
         }, 2000);
      } else {
         props.setShowRegAlert(true);
         props.setIsRegistered(false);
      }
   }

   return (
      <div className="reg-form w-100 h-100 center">
         <form action="" className="center column">
            <div className="w-100 center column title">
               <div className="logo-black">
                  Medi<span>Care</span>
               </div>
               <small>Join with us for more services</small>
            </div>
            <div className="w-100">
               <input
                  type="email"
                  id="email"
                  className="w-100"
                  placeholder=""
                  required
               />
               <label htmlFor="email">Email</label>
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
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="c-password"
                  className="w-100"
                  placeholder=""
                  required
               />
               <label htmlFor="c-password">Confirm Password</label>
            </div>
            <div className="w-100">
               <input
                  type="submit"
                  value="Register"
                  className="w-100"
                  id="sign-up"
                  onClick={register}
               />
            </div>
            <div className="w-100 between or">
               <span></span>
               <p>or</p>
               <span></span>
            </div>
            <div className="w-100">
               <Link to="/login">
                  <input
                     type="submit"
                     value="Log In"
                     className="w-100"
                     id="sign-in"
                  />
               </Link>
            </div>
         </form>
      </div>
   );
}

export default Register;
