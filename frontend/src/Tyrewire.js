import React, { useEffect } from "react";
import "./Tyrewire.css";
import abtimg from "./images/twnew.jpg";
import tw1 from "./images/tw1.jpg";
import tw2 from "./images/tw2.webp";
import { Helmet } from "react-helmet";

const Tyrewire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tyre Wire Scrap",
    description: "Light melting scrap from waste tyre shredding process",
    brand: {
      "@type": "Organization",
      name: "Vikah Rubbers",
    },
    material: "Scrap Tyre Wire",
    url: "https://vikahrubbers.com/TyreWireScrap",
  };

  return (
    <main className="tyrewire-page">
      <Helmet>
        <title>Tyre Wire Scrap | Vikah Rubbers</title>
        <meta
          name="description"
          content="Light melting scrap from waste tyre shredding process. High-quality tyre wire scrap for industrial use."
        />
        <meta
          name="keywords"
          content="Tyre Wire Scrap, Waste Tyre Recycling, Scrap Metal, Tyre Shredding"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vikahrubbers.com/TyreWireScrap" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header className="hero-banner position-relative">
        <img src={abtimg} alt="Company products" className="img-fluid w-100" />
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">Tyre Wire Scrap</h1>
          <p className="lead">
            Light melting scrap from waste tyre shredding process
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="content container my-5">
        <p className="fs-5 mb-4">
          Tyre Wire Scrap, also known as TDS (Tyre Derived Steel), is a light
          melting scrap obtained during the shredding process of waste tyres. It
          primarily consists of steel wires extracted from tyres during
          recycling.
        </p>

        <h2 className="mb-3">Importance of Tyre Wire Scrap Recycling</h2>
        <p className="mb-4">
          Recycling tyre wire helps reduce environmental pollution by recovering
          steel that can be reused in various industries. This not only saves
          natural resources but also reduces landfill waste and lowers the
          carbon footprint associated with steel production.
        </p>

        {/* New highlighted sentence with 7200 tons */}
        <p className="fs-5 fw-semibold text-primary mb-5">
          We process approximately 7,200 tons of tyre wire scrap annually as
          part of our recycling operations.
        </p>

        {/* Image Gallery */}
        <div className="image-gallery d-flex flex-column flex-md-row justify-content-center gap-4">
          <figure className="text-center">
            <img
              src={tw1}
              alt="Tyre wire scrap closeup"
              className="img-fluid rounded"
              style={{ maxWidth: "300px" }}
            />
            <figcaption className="mt-2 fst-italic text-muted">
              Closeup view of tyre wire scrap
            </figcaption>
          </figure>

          <figure className="text-center">
            <img
              src={tw2}
              alt="Processed tyre wire scrap"
              className="img-fluid rounded"
              style={{ maxWidth: "300px" }}
            />
            <figcaption className="mt-2 fst-italic text-muted">
              Processed tyre wire scrap ready for recycling
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Tyrewire;
