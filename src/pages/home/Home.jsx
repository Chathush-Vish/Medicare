import "./Home.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import nurse from "../../assets/nurse.jpg";
import FadeInSection from "../../components/FadeIn";
import choose from "../../assets/cho.jpg";
import Man1 from "../../assets/man-1.jpg";
import Man2 from "../../assets/man-2.jpg";
import Man3 from "../../assets/man-3.jpg";
import user1 from "../../assets/1.png";
import user2 from "../../assets/2.png";
import user3 from "../../assets/3.png";

function Home(props) {
   const { isLoged } = props;

   return (
      <>
         {/* Navbar */}
         <Navbar isLoged={isLoged} />
         <main>
            {/* hero */}
            <section className="hero start g-3 w-100 h-100 paddin-x">
               <div>
                  <h1>
                     We help you to <span>find the best doctor </span>
                     around you
                  </h1>
                  <p>
                     Separated they live in Bookmarksgrove right at the coas of
                     the Semantics, a large language ocean.
                  </p>
               </div>
               <button className="btn btn-secondary">add appoinment</button>
            </section>
            {/* Features */}
            <FadeInSection>
               <section className="feature w-100 center g-10 p-3">
                  <div className="start column">
                     <div className="f-box center g-2">
                        <i className="bi bi-person"></i>
                        <h2>1570 +</h2>
                     </div>
                     <p>Satisfied customers</p>
                  </div>
                  <div className="start column">
                     <div className="f-box center g-2">
                        <i className="bi bi-hospital"></i>
                        <h2>22 </h2>
                     </div>
                     <p>Hospitels</p>
                  </div>
                  <div className="start column">
                     <div className="f-box center g-2">
                        <i className="bi bi-globe2"></i>
                        <h2>150 +</h2>
                     </div>
                     <p>Online Clients</p>
                  </div>
                  <div className="start column">
                     <div className="f-box center g-2">
                        <i className="bi bi-people"></i>
                        <h2>750 +</h2>
                     </div>
                     <p>Employees</p>
                  </div>
               </section>
            </FadeInSection>
            {/* Experience */}
            <FadeInSection>
               <section className="exp paddin-x paddin-y w-100 between g-5">
                  <div className="exp-1 w-100">
                     <img src={nurse} width="100%" alt="" />
                     <div className="exp-years center column">
                        <h1>10</h1>
                        <h2>Years</h2>
                        <p>Experience</p>
                     </div>
                  </div>
                  <div className="exp-2 w-100 start g-3">
                     <div>
                        <h2>
                           We're Here To Assist You With Exploring Protection
                        </h2>
                     </div>
                     <div>
                        <a href="">
                           Aliqu diam amet diam et eos. Clita erat ipsum et
                           lorem sed stet lorem sit clita duo justo erat amet
                        </a>
                     </div>
                     <div className="between w-100">
                        <div className="center g-2 w-50">
                           <i class="bi bi-calendar2-plus"></i>
                           <p>
                              Flexible healthcare <br /> plans
                           </p>
                        </div>
                        <div className="center g-2 w-50">
                           <i class="bi bi-truck"></i>
                           <p>
                              Cash on <br /> delivery
                           </p>
                        </div>
                     </div>
                     <span>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                     </span>
                  </div>
               </section>
            </FadeInSection>
            {/* banner */}
            <FadeInSection>
               <section className="banner flex w-100">
                  <div className="banner-1 start g-3 w-50 paddin-y">
                     <h2>For Individuals And Organisations</h2>
                     <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                     </p>
                     <button>Learn More</button>
                  </div>
                  <div className="banner-2 start g-3 w-50 paddin-y"></div>
               </section>
            </FadeInSection>
            {/* choose */}
            <FadeInSection>
               <section className="choose w-100 between paddin-x paddin-y">
                  <img src={choose} alt="" id="choose-img" />
                  <div className="w-50 flex column g-3">
                     <h2>Few Reasons Why People Choosing Us!</h2>
                     <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                     </p>
                     <div className="w-100 flex column g-3">
                        <div className="between w-100 g-3">
                           <div className="box center column">
                              <i class="bi bi-bar-chart-steps"></i>
                              <p>Easy Process</p>
                           </div>
                           <div className="box center column">
                              <i class="bi bi-truck"></i>
                              <p>Fast Delivery</p>
                           </div>
                        </div>
                        <div className="between w-100 g-3">
                           <div className="box center column">
                              <i class="bi bi-clipboard2-pulse"></i>
                              <p>Policy Controlling</p>
                           </div>
                           <div className="box center column">
                              <i class="bi bi-currency-exchange"></i>
                              <p>Money Saving</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </FadeInSection>
            {/* Reasons */}
            <FadeInSection>
               <section className="paddin-x  res w-100 center column g-5">
                  <h2>We Provide professional Healthcare Services!</h2>

                  <div className="w-100 flex column g-3">
                     <FadeInSection>
                        <div className="w-100 between g-3">
                           <div className="box center column g-5">
                              <div className="ico-box center g-3">
                                 <i class="bi bi-hospital"></i>
                                 <h4>Hospital Services</h4>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Accusamus, autem!
                              </p>
                           </div>
                           <div className="box center column g-5">
                              <div className="ico-box center g-3">
                                 <i class="bi bi-globe-americas"></i>
                                 <h4>Vetarion</h4>
                              </div>
                              <p>
                                 It is a long established fact that a reader
                                 will be distracted by the readable content of a
                                 page when looking at its layout
                              </p>
                           </div>
                           <div className="box center column g-5">
                              <div className="ico-box center g-3">
                                 <i class="bi bi-car-front-fill"></i>
                                 <h4>Ambulances</h4>
                              </div>
                              <p>
                                 when an unknown printer took a galley of type
                                 and scrambled
                              </p>
                           </div>
                        </div>
                     </FadeInSection>
                     <FadeInSection>
                        <div className="w-100 between g-3">
                           <div className="box center column g-3">
                              <div className="ico-box center g-3">
                                 <i class="bi bi-droplet-half"></i>
                                 <h4>Medicals</h4>
                              </div>
                              <p>
                                 There are many variations of passages of Lorem
                                 Ipsum available, but the majority
                              </p>
                           </div>
                           <div className="box center column g-5">
                              <div className="ico-box center g-3">
                                 <i className="bi bi-globe"></i>
                                 <h4>All Equiments</h4>
                              </div>
                              <p>
                                 Sed ut perspiciatis unde omnis iste natus error
                                 sit voluptatem accusantium doloremque
                                 laudantium
                              </p>
                           </div>
                           <div className="box center column g-5">
                              <div className="ico-box center g-3">
                                 <i class="bi bi-people"></i>
                                 <h4>Best Doctors</h4>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Accusamus, autem!
                              </p>
                           </div>
                        </div>
                     </FadeInSection>
                  </div>
               </section>
            </FadeInSection>
            {/* team */}
            <FadeInSection>
               <section className="team w-100 center margin-y">
                  <div className="inner-team margin-x w-100 center column g-3">
                     <h2>Meet Our Team.</h2>
                     <div className="w-100 inner-card  between g-5">
                        <div className="flex column g-2 box ">
                           <img src={Man1} alt="" width="100%" />
                           <div>
                              <h3>Micheal Jhon</h3>
                              <small>Founder & CEO</small>
                           </div>
                           <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                           </p>
                        </div>
                        <div className="flex column g-2 box ">
                           <img src={Man2} alt="" width="100%" />
                           <div>
                              <h3>Lara Soft</h3>
                              <small>Manager</small>
                           </div>
                           <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Libero fugiat atque quis quas
                              ipsa sed.
                           </p>
                        </div>
                        <div className="flex column g-2 box ">
                           <img src={Man3} alt="" width="100%" />
                           <div>
                              <h3>Alex Anderson</h3>
                              <small>Head Doctor</small>
                           </div>
                           <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature
                           </p>
                        </div>
                     </div>
                     <div>
                        <button>Learn More</button>
                     </div>
                  </div>
               </section>
            </FadeInSection>
            {/* Reviews */}
            <FadeInSection>
               <section className="review w-100 center column paddin-x column g-5">
                  <h2>What They Say About Our Service</h2>
                  <div className="review-scr center column g-2">
                     <img src={user1} alt="" />
                     <div className="flex g-1">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                     </div>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta quo aliquid quam nulla? Molestias, quasi vel
                        quam voluptatibus, alias deserunt voluptatem nesciunt
                     </p>
                     <strong>~ Jhon Marston ~</strong>
                  </div>
                  <div className="images">
                     <img src={user1} alt="" className="right-1 img" />
                     <img src={user2} alt="" className="right-2 img" />
                     <img src={user3} alt="" className="right-3 img" />
                     <img src={user3} alt="" className="left-1 img" />
                     <img src={user2} alt="" className="left-2 img" />
                     <img src={user1} alt="" className="left-3 img" />
                  </div>
               </section>
            </FadeInSection>
         </main>
         {/* Footer */}
         <FadeInSection>
            <Footer />
         </FadeInSection>
      </>
   );
}

export default Home;
