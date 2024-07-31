import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/Register.jsx";
import Alert from "./components/Alert.jsx";
import RegAlert from "./components/RegAlert.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
   const [showAlert, setShowAlert] = useState(false);
   const [showRegAlert, setShowRegAlert] = useState(false);
   const [isLoged, setIsLoged] = useState(false);
   const [isRegistered, setIsRegistered] = useState(false);
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return (
      <Router>
         {/* SHOW LOGIN ALERT */}
         {showAlert && (
            <Alert
               setShowAlert={setShowAlert}
               showAlert={showAlert}
               isLoged={isLoged}
            />
         )}

         {/* SHOW REGISTER ALERT */}
         {showRegAlert && (
            <RegAlert
               setShowRegAlert={setShowRegAlert}
               showRegAlert={showRegAlert}
               isRegistered={isRegistered}
            />
         )}

         <Routes>
            <Route path="/" element={<Home isLoged={isLoged} />} />
            <Route
               path="/login"
               element={
                  <Login
                     userName={userName}
                     password={password}
                     setIsLoged={setIsLoged}
                     setShowAlert={setShowAlert}
                  />
               }
            />
            <Route
               path="/register"
               element={
                  <Register
                     setUserName={setUserName}
                     setEmail={setEmail}
                     setPassword={setPassword}
                     setIsRegistered={setIsRegistered}
                     setShowRegAlert={setShowRegAlert}
                  />
               }
            />
         </Routes>
      </Router>
   );
}

export default App;
