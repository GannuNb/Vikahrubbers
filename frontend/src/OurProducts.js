import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OurProducts.css";
import cr from "./images/cr.jpg";
import epdm from "./images/epdm.jpg";
import tyrewire from "./images/tyrewire.jpg";
import { Helmet } from "react-helmet";

const OurProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      img: cr,
      title: "Crumb Rubber",
      description: `Derived from recycled scrap tires, crumb rubber is processed into small granules free from steel and fiber contaminants. Ideal for diverse industrial applications.`,
      link: "/CrumRubber",
    },
    {
      img: epdm,
      title: "EPDM Granules",
      description: `Durable, flexible, and weather-resistant, these colored EPDM granules are perfect for sports surfaces and playground installations, ensuring safety and longevity.`,
      link: "/Epdm",
    },
    {
      img: tyrewire,
      title: "Tyre Wire Scrap",
      description: `Lightweight scrap from the shredding of waste tires, containing minimal rubber, suitable for melting and recycling processes in various manufacturing sectors.`,
      link: "/TyreWire",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Products | Vikah Rubbers</title>

        <meta
          name="description"
          content="Explore Vikah Rubbers recycled rubber products including Crumb Rubber, EPDM Granules and Tyre Wire Scrap."
        />

        <meta
          name="keywords"
          content="crumb rubber, EPDM granules, tyre wire scrap, recycled rubber products, Vikah Rubbers"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://vikahrubbers.com/ourproducts" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Products | Vikah Rubbers" />
        <meta
          property="og:description"
          content="Discover high-quality recycled rubber products from Vikah Rubbers."
        />
        <meta
          property="og:url"
          content="https://vikahrubbers.com/ourproducts"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="our-products-page">
        <div className="section-heading">
          <h2>Our Premium Products</h2>
          <p>
            We specialize in supplying top-quality recycled materials designed
            to meet the demanding needs of sports infrastructure, playground
            safety, and sustainable recycling solutions.
          </p>
        </div>

        <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card-container" key={index}>
              <div
                className={`product-card ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="product-image-wrapper">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="product-img"
                  />
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link to={product.link} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProducts;
