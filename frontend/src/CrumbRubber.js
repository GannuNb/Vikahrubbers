import React, { useEffect } from 'react';
import './CrumbRubber.css';
import abtimg from './images/cr1.jpg';
import crumb1 from './images/crumb1.png';
import crumb2 from './images/crumb2.webp';
import crumb3 from './images/crumb3.jpg';
import crumb4 from './images/crumb4.jpg';
import crumb5 from './images/crumb5.jpg';

const CrumbRubber = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="full-width-container">
      <section className="hero-banner">
  <img src={abtimg} alt="Crumb Rubber Production" />
  <div className="hero-text">
    <h1>Crumb Rubber</h1>
    <p>High-quality rubber granules made from recycled tires for versatile industrial use</p>
  </div>
</section>


      <section className="intro-section">
        <h2 className="products-heading mt-5">Crumb Rubber</h2>
        <p>
          Crumb rubber is made by reducing scrap tires into small, uniform granules. Inherent reinforcing materials, such as steel and fiber, are removed, along with other types of inert contaminants, such as dust, glass, or rock.
        </p>
        <p>
          Lakshmi Ganapathi Industries has the nationwide capacity to produce more than 52,000 tonnes of crumb rubber annually for a wide variety of commercial applications.
        </p>
      </section>

      <section className="production-process">
        <h2>Production Process</h2>
        <p>
          We use the ambient mechanical grinding method. In the ambient mechanical grinding process, the breaking up of a scrap tire happens at or above normal room temperature. Ambient grinding is a multi-step technology and uses whole or pre-treated car or truck tires in the form of shred or chips, or sidewalls or treads. The rubbers, metals, and textiles are sequentially separated out. Tires are passed through a shredder, which breaks the tires into chips.
        </p>
        <p>
          The chips are fed into a granulator that breaks them into small pieces while removing steel and fiber in the process. Any remaining steel is removed magnetically and fiber through a combination of shaking screens and wind sifters. Finer rubber particles can be obtained through further grinding in secondary granulators and high-speed rotary mills.
        </p>
        <p>
          Ambient grinding is the production process used by the majority of crumb producers. The machines most commonly used for fine grinding in ambient plants are:
        </p>
        <ul>
          <li><strong>Secondary Granulators</strong></li>
          <li><strong>High-Speed Rotary Mills</strong></li>
          <li><strong>Extruders or Screw Presses</strong></li>
          <li><strong>Cracker Mills</strong></li>
        </ul>
      </section>

      <section className="applications">
        <h2>Applications for Crumb Rubber Granules</h2>

        <div className="app-grid">
          <div>
            <h5>Sport Surfaces</h5>
            <ul>
              <li>Kindergarten Playgrounds and Recreation Areas</li>
              <li>School Sports Areas</li>
              <li>Athletic Tracks</li>
              <li>Tennis and Basketball Courts</li>
            </ul>
          </div>

          <div>
            <h5>Automotive Industry</h5>
            <ul>
              <li>Bumpers</li>
              <li>Splash Guards and Fenders</li>
              <li>Floor Mats for Cars and Trucks</li>
              <li>Floor Liners for Trucks and Vans</li>
            </ul>
          </div>

          <div>
            <h5>Construction</h5>
            <ul>
              <li>Hospital, Industrial, and Bathroom Flooring</li>
              <li>Floor Tile</li>
              <li>Foundation Waterproofing</li>
              <li>Dam, Silo, and Roof Liners</li>
            </ul>
          </div>

          <div>
            <h5>Geotechnical/Asphalt Applications</h5>
            <ul>
              <li>Rubberized Asphalt for Roads and Driveways</li>
              <li>Drainage Pipes</li>
              <li>Soil Conditioner</li>
              <li>Porous Irrigation Pipes</li>
              <li>Road Building and Repair</li>
            </ul>
          </div>

          <div>
            <h5>Adhesives and Sealants</h5>
            <ul>
              <li>Adhesives and Sealing Compounds</li>
              <li>Textured and Non-Slip Paints</li>
              <li>Roof Coating and Waterproofing</li>
            </ul>
          </div>

          <div>
            <h5>Shock Absorption and Safety Products</h5>
            <ul>
              <li>Shock Absorbing Pads for Rails and Machinery</li>
              <li>Sound Barriers for Highways</li>
              <li>Abrasion Lining in Mining Equipment</li>
            </ul>
          </div>

          <div>
            <h5>Rubber and Plastic Products</h5>
            <ul>
              <li>Pipe Insulation and Lining</li>
              <li>Garbage Cans</li>
              <li>Shoe Soles and Heels</li>
              <li>Wire and Cable Insulation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="centered-images">
        <img src={crumb1} alt="Crumb Rubber 1" className="centered-img" />
        <img src={crumb2} alt="Crumb Rubber 2" className="centered-img" />
        <img src={crumb3} alt="Crumb Rubber 3" className="centered-img" />
      </section>

      <section className="product-description">
        <h2>Crumb Rubber Powder - 30 Mesh</h2>
        <p><strong>Description:</strong></p>
        <p>
          Our premium 30 Mesh Crumb Rubber is manufactured and supplied to meet the highest standards, making it ideal for various applications, including:
        </p>
        <ul>
          <li>Tyre Manufacturing</li>
          <li>Flaps Production</li>
          <li>Sports Ground Surfacing</li>
          <li>Rubber Mats</li>
          <li>Rubber Bushes</li>
        </ul>
        <p><strong>Production Capacity:</strong></p>
        <p>With a robust manufacturing facility, we achieve a production capacity of <strong>2200 tons per month</strong>.</p>
        <p><strong>Quality Assurance:</strong></p>
        <p>Each batch undergoes stringent quality checks at our advanced testing unit to ensure top-notch quality and utility.</p>
      </section>

      <section className="centered-images small-images">
        <img src={crumb4} alt="Crumb Rubber 4" className="small-centered-img" />
        <img src={crumb5} alt="Crumb Rubber 5" className="small-centered-img" />
      </section>

      <section className="product-info">
        <h2>Crumb Rubber Powder - 40 Mesh</h2>

        <section className="product-details">
          <p>
            Mesh refers to material that has been sized by passing it through a screen with a specific number of holes per inch (25.4 mm). For instance, 40 mesh crumb rubber powder passes through a screen with 40 holes per inch, creating rubber granules that are slightly under 1/40th of an inch. The exact particle size can vary based on the wire thickness used in the screen.
          </p>
        </section>

        <section className="product-description">
          <h4>Crumb Rubber Granules</h4>
          <p>
            Crumb rubber granules are recycled rubber produced from automotive and truck scrap tires. During recycling, steel and tire cord (fluff) are removed, leaving behind tire rubber in granular form. Further processing with a granulator or cracker mill, sometimes with cryogenic assistance or mechanical methods, reduces the particle size. Granules are then sized and classified based on criteria such as color (black only or black and white).
          </p>
          <p>
            The granulate size is determined by passing through a screen, either by dimension (e.g., 1/4 inch) or mesh size (e.g., 10, 20 holes per inch). Crumb rubber is frequently used in applications like artificial turf to provide cushioning.
          </p>
        </section>
      </section>
    </main>
  );
};

export default CrumbRubber;
