import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Lfooter from "./components/Lfooter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row">
                    <div className="col-12">
                      <Slider />
                    </div>
                  </div>

                  <div className="container my-2 gap-5">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Footer
                          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HmTpFgw8HNVXCR_2zQ22x6fWcFsK4_Wa-A&s"
                          title="Haircut"
                          text=" At [Your Salon Name], every cut is tailored to suit your style, face shape, and lifestyle. From classic looks to modern trends, we deliver precision cuts that keep you looking fresh, confident, and effortlessly stylish."
                          btnText="Book Appointment"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Footer
                          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7lvtec1iPi3inS_9PEF8XJ7wynKsQZ69TA&s"
                          title="Beard"
                          text=" At [Your Salon Name], we shape and style beards with precision to enhance your look. From sharp trims to full grooming, our experts ensure a clean, polished, and confident finish every time."
                          btnText="Book Appointment"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Footer
                          imgSrc="https://thumbs.dreamstime.com/b/skincare-facial-massage-beautiful-young-woman-enjoying-treatment-35402312.jpg"
                          title="Face Massage"
                          text=" Relax and rejuvenate with our soothing face massage. Designed to relieve stress, improve circulation, and refresh your skin, it leaves you glowing and revitalized. Book your stressfree day."
                          btnText="Book Appointment"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Footer
                          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt77yxQ5nT2hLukrl0gzvSomuCW8Z1Q0MymA&s"
                          title="All"
                          text=" From precision haircuts and sharp beard styling to soothing face massages, we provide complete grooming care that keeps you looking fresh, polished, and confident. Enjoy your day."
                          btnText="Book Appointment"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>

          <div className="row">
            <div className="col-12">
              <Lfooter />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;