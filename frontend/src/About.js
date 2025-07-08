import React, { useEffect } from 'react';
import './About.css';
import abtimg1 from './images/about.jpg';
import abtimg2 from './images/combo1.png';
import abtimg3 from './images/combo2.png'; // Keep combo3 as top image

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-modern">
      {/* Hero Section */}
      <section className="hero-half" style={{ backgroundImage: `url(${abtimg3})` }}>
        <div className="hero-content">
          <h1>VIKAH RUBBERS PVT LTD</h1>
          <p style={{color:'white'}}>Reimagining Rubber. Responsibly.</p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section-card">
        <div className="card-content">
          <div className="card-text">
            <h2>Who We Are</h2>
            <p>
              At <strong style={{ color: '#000000', fontWeight: 'bold' }}>VIKAH RUBBERS PVT LTD</strong>, based in Hanumakonda, Telangana, we lead the way in rubber recycling and manufacturing. Our expert team transforms discarded rubber into premium-quality crumb and EPDM granules that meet the highest industry standards.
            </p>

            <p>
              With decades of combined experience, our operations serve diverse industries such as automotive tyres, conveyor belts, sports flooring, and molded rubber products — both in India and internationally.
            </p>
          </div>
          <div className="card-image">
            <img src={abtimg1} alt="Rubber plant" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-card alt">
        <div className="card-content">
          <div className="card-image">
            <img src={abtimg2} alt="Granules production" />
          </div>
          <div className="card-text">
            <h2>Our Vision & Mission</h2>
            <p>
              Our vision is to pioneer sustainable rubber recycling solutions that support circular economies worldwide. We are committed to innovation, quality, and environmental stewardship.
            </p>
            <p>
              Through continuous improvement and adherence to global quality and safety standards, Vikah Rubbers aims to be the most trusted partner in recycled rubber products.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-card">
        <div className="card-content">
          <div className="card-text">
            <h2>Sustainability & Responsibility</h2>
            <p>
              Sustainability is at the heart of everything we do. Our processes minimize waste, reduce environmental impact, and maximize the reuse of rubber materials, helping clients meet their eco-friendly goals.
            </p>
            <p>
              We comply fully with environmental regulations and maintain certifications for quality management, occupational health, and safety — ensuring a safe workplace and a better planet.
            </p>
          </div>
          <div className="card-image">
            <img src={abtimg3} alt="Sustainability" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <h3>10,000+ MT</h3>
            <p>Rubber Recycled Annually</p>
          </div>
          <div className="stat-box">
            <h3>20+ Countries</h3>
            <p>Export Network</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Eco-Compliant Process</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
