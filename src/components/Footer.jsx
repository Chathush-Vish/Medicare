import FB from "../assets/fb.png";
import YT from "../assets/yt.png";
import WA from "../assets/wa.png";
import INSTA from "../assets/insta.png";
import LINKDIN from "../assets/linkdin.png";

function Footer() {
   return (
      <footer className=" w-100  center column">
         <div className="footer w-100 paddin-x">
            <div className="flex column g-3">
               <div className="logo">
                  Medi<span>Care</span>
               </div>
               <div className="newsletter flex">
                  <input type="text" placeholder="Email address" />
                  <button>Submit</button>
               </div>
               <div className="media flex g-1">
                  <img src={FB} alt="" width="35px" />
                  <img src={WA} alt="" width="35px" />
                  <img src={YT} alt="" width="35px" />
                  <img src={INSTA} alt="" width="35px" />
                  <img src={LINKDIN} alt="" width="35px" />
               </div>
            </div>
            <div className="main-link flex column g-1">
               <a href="#">Home</a>
               <a href="#">About Us</a>
               <a href="#">Appoinment</a>
               <a href="#">Services</a>
               <a href="#">Contact Us</a>
            </div>
            <div className="sub-link g-1">
               <a href="#">Privacy & policy</a>
               <a href="#">Terms & Conditions</a>
               <a href="#">F&Q</a>
               <a href="#">Reviews</a>
            </div>
            <div className="con-det center column g-1">
               <p>example@medicare.com</p>
               <div>
                  <p>+94 77 5858 369</p>
                  <p>+94 57 1234 546</p>
               </div>
               <p>Main street, Lako, Sinima</p>
            </div>
         </div>
         <div className="line"></div>
         <div className="copyright">
            &copy; 2024 Medicare. All rights reserved.
         </div>
      </footer>
   );
}

export default Footer;
