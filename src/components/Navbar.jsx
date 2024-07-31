import { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar(props) {
   useEffect(() => {
      const header = document.querySelector(".header");
      const navLinks = document.querySelectorAll(".link");
      const logo = document.querySelector(".logo");

      const handleScroll = () => {
         if (window.scrollY > 100) {
            header.style.backgroundColor = "#fff";
            header.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
            logo.style.color = "#222";
            navLinks.forEach((x) => {
               x.style.color = "#222";
            });
         } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
            logo.style.color = "#fff";
            navLinks.forEach((x) => {
               x.style.color = "#fff";
            });
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header className="paddin-x header">
         <nav className="w-100 between navbar">
            <div className="center g-3">
               <div className="logo">
                  Medi<span>Care</span>
               </div>
            </div>
            <div className="center g-2">
               <ul className="center g-2 nav-links">
                  <li className="nav-link">
                     <a href="" className="link">
                        About Us
                     </a>
                  </li>
                  <li className="nav-link">
                     <a href="" className="link">
                        Appoinment
                     </a>
                  </li>
                  <li className="nav-link">
                     <a href="" className="link">
                        Services
                     </a>
                  </li>
                  <li className="nav-link">
                     <a href="" className="link">
                        Blog
                     </a>
                  </li>
                  <li className="nav-link">
                     <a href="" className="link">
                        Contact Us
                     </a>
                  </li>
               </ul>
               <Link to="/login">
                  <button className="btn btn-secondary">
                     {props.isLoged ? "Account" : "Log In"}
                  </button>
               </Link>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
