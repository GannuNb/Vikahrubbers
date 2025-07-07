import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Images
import heroImage from "./images/topimg.webp";
import crumrubberimg from "./images/crmb2.jpg";
import epdmimg from "./images/epdmg1.jpg";
import tyrewireimg from "./images/tw1.webp";

// Media
import aboutImage from './images/about.jpg';
import contactVideo from './images/contactus.mp4';

function Home() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImage} alt="hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Vikah Rubbers</h1>
          <p>Leading the way in sustainable rubber solutions</p>
        </div>
      </section>

      {/* About Us */}
      <section className="about" data-aos="fade-up">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Vikah Rubbers located in Kodad, Telangana, India is a renowned name among Rubber Industries.
              At Vikah Rubbers, consistent quality of Rubber Crumb and Rubber Granules at various grades of Factice
              are manufactured compliant with all requirements of relevant national standards and
              tested as per prevalent internationally accepted test methods.
            </p>
            <Link to="/about" className="learn-more-button">Learn More</Link>
          </div>
          <img src={aboutImage} className="media" alt="About Us" />
        </div>
      </section>

{/* Products */}
<section className="products" data-aos="fade-up">
  <h2>Our Products</h2>
  <div className="product-list">
    <div className="product-card">
      <img src={crumrubberimg} alt="Crumb Rubber" />
      <h3>CRUMB RUBBER</h3>
      <Link to="/CrumbRubber" className="product-learn-btn">Learn More</Link>
    </div>
    <div className="product-card">
      <img src={epdmimg} alt="EPDM Granules" />
      <h3>EPDM GRANULES</h3>
      <Link to="/Epdm" className="product-learn-btn">Learn More</Link>
    </div>
    <div className="product-card">
      <img src={tyrewireimg} alt="Tyre Wire" />
      <h3>TYRE WIRE</h3>
      <Link to="/TyreWire" className="product-learn-btn">Learn More</Link>
    </div>
  </div>
</section>



      {/* Contact */}
      <section className="contact" data-aos="fade-up">
        <div className="contact-content">
          <video src={contactVideo} className="media" autoPlay muted loop />
          <div className="contact-text">
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! Whether you are looking for more information about our rubber products,
              want to discuss a custom solution, or have questions about partnerships, our team is ready to help.
            </p>
            <p>
              Reach out to us through our contact form, and we’ll get back to you promptly.
              Vikah Rubbers is committed to building lasting relationships through trust, quality, and service.
            </p>
            <Link to="/ContactUs" className="enquire-button">Enquire Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
