import { useEffect } from "react";
import "./style.css";

function RegAlert(props) {
   useEffect(() => {
      if (props.showRegAlert) {
         const timer = setTimeout(() => {
            props.setShowRegAlert(false);
         }, 2000);

         return () => clearTimeout(timer);
      }
   }, [props.showRegAlert]);

   return (
      <>
         {props.isRegistered ? (
            <div className="alert center">
               <i className="bi bi-check-circle-fill tick"></i>
               <p>Registered successfully!</p>
            </div>
         ) : (
            <div className="alert center">
               <i className="bi bi-x-circle-fill false"></i>
               <p>Passwords dosen't match!</p>
            </div>
         )}
      </>
   );
}

export default RegAlert;
