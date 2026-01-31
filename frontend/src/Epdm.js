import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Epdm.css';
import abtimg from './images/epdmm.webp';
import epdm1 from './images/epdm1.jpeg';
import epdm2 from './images/epdm2.jpg';
import epdm3 from './images/epdm3.jpeg';
import epdm4 from './images/epdm4.jpeg';

const Epdm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "EPDM Colored Rubber Granules",
    "description": "Durable, UV resistant EPDM rubber granules ideal for sports fields, playgrounds, and other versatile surfaces.",
    "brand": {
      "@type": "Organization",
      "name": "Vikah Rubbers"
    },
    "material": "EPDM Rubber",
    "url": "https://vikahrubbers.com/Epdm"
  };

  return (
    <main className="epdm-page">
      {/* SEO Helmet */}
      <Helmet>
        <title>EPDM Colored Rubber Granules | Vikah Rubbers</title>
        <meta
          name="description"
          content="Durable, UV resistant EPDM rubber granules, perfect for sports fields, playgrounds, commercial flooring, and versatile applications."
        />
        <meta
          name="keywords"
          content="EPDM Rubber, Colored Rubber Granules, Sports Flooring, Playground Surfaces, Vikah Rubbers"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vikahrubbers.com/Epdm" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <header className="hero-banner">
        <img src={abtimg} alt="EPDM Colored Rubber Granules" className="img-fluid w-100" />
        <div className="hero-text text-center text-white px-3">
          <h1>EPDM Colored Rubber Granules</h1>
          <p>Durable, UV resistant, and ideal for sports & playground surfaces</p>
        </div>
      </header>

      {/* Info and Image Split */}
      <section className="info-split container">
        <article className="info-text">
          <p>
            EPDM colored rubber granules are increasingly popular for commercial and private sports playgrounds due to their multifunctional design.
            These granules feature a unique construction that combines special polymer compounds with various components, creating a versatile and durable material.
          </p>
          <p>
            The structure of EPDM rubber granules provides an aesthetically pleasing, durable, and UV-resistant surface, making it an excellent alternative for sports ground flooring.
          </p>
        </article>
        <figure className="info-image">
          <img src={epdm1} alt="EPDM Colored Rubber Granules" />
        </figure>
      </section>

      {/* Benefits & Applications Cards */}
      <section className="cards-section container">
        <div className="card">
          <h2>Benefits</h2>
          <ul>
            <li>Durable, robust, and highly resilient</li>
            <li>Combines power and breathability</li>
            <li>Allows water permeability</li>
            <li>Environmentally friendly</li>
            <li>Offers versatility</li>
          </ul>
        </div>
        <div className="card">
          <h2>Applications</h2>
          <p>
            EPDM colored rubber granules are designed for versatile applications across various sectors including sports ground floors, commercial playground floors,
            courtyards, multipurpose athletic tracks, school floors, industrial floors, and multipurpose playgrounds.
          </p>
          <p>
            Their shock-absorbing, elastic, and wear-resistant design provides maximum protection and durability even under intense activities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery container">
        {[epdm2, epdm3, epdm4].map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt={`EPDM product ${i + 2}`} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Epdm;
