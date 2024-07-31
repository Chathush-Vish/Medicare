import { useEffect } from "react";
import "./style.css";

function Alert(props) {
   useEffect(() => {
      if (props.showAlert) {
         const timer = setTimeout(() => {
            props.setShowAlert(false);
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [props.showAlert]);

   return (
      <>
         {props.isLoged ? (
            <div className="alert center">
               <i className="bi bi-check-circle-fill tick"></i>
               <p>Login successfully!</p>
            </div>
         ) : (
            <div className="alert center">
               <i className="bi bi-x-circle-fill false"></i>
               <p>Username or Password are incorrect!</p>
            </div>
         )}
      </>
   );
}

export default Alert;
