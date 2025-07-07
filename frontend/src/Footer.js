import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-start">
          {/* ABOUT US */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">ABOUT US</h5>
            <div className="footer-line mb-3"></div>
            <p className="small">
              VikahRubbers located in Hanumakonda,Telangana, India is a renowned name among Rubber Industries. At VikahRubbers, consistent quality of Rubber Crumb and Rubber Granules at various grades of Factice are manufactured compliant with all requirements of relevant national standards and tested as per prevalent internationally accepted test methods.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">QUICK LINKS</h5>
            <div className="footer-line mb-3"></div>
            <ul className="list-unstyled small">
              <li className="mb-2">› <Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2">› <Link to="/about" className="text-white text-decoration-none">About us</Link></li>
              <li className="mb-2">› <Link to="/ourproducts" className="text-white text-decoration-none">Our Products</Link></li>
              <li className="mb-2">› <Link to="/askus" className="text-white text-decoration-none">Enquire us</Link></li>
              <li className="mb-2">› <Link to="/contactus" className="text-white text-decoration-none">Contact us</Link></li>
            </ul>
          </div>

          {/* OUR PRODUCTS */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">OUR PRODUCTS</h5>
            <div className="footer-line mb-3"></div>
            <ul className="list-unstyled small">
              <li className="mb-2">› <Link to="/crumbRubber" className="text-white text-decoration-none">Crumb Rubber</Link></li>
              <li className="mb-2">› <Link to="/epdm" className="text-white text-decoration-none">EPDM Granules</Link></li>
              <li className="mb-2">› <Link to="/tyrewire" className="text-white text-decoration-none">Tyre Wire Scrap</Link></li>
            </ul>
          </div>

{/* ADDRESS */}
<div className="col-md-3 mb-4">
  <h5 className="mb-3">ADDRESS</h5>
  <div className="footer-line mb-3"></div>

  <p className="small fw-bold mb-1">VIKAH RUBBERS PRIVATE LIMITED</p>

  <p className="small mb-1"><strong>ADMIN OFF :</strong> #406, 4th Floor, Patel Towers, Above EasyBuy, Beside Nagole RTO Office, Nagole, Hyderabad, Telangana - 500068</p>

  <p className="small mb-1"><strong>Factory Address :</strong> Shed No.1 in Plot No.14 (Site - A), IP Rampur, Kazipet Mandal, Hanumakonda Dist, Telangana - 506151</p>

  <p className="small mb-1"><strong>Phone :</strong> +91 4049471616</p>
  <p className="small mb-1"><strong>Mobile :</strong> +91 8886789356</p>
  <p className="small mb-3"><strong>E-mail :</strong> <a href="mailto:info@vikahrubbers.com" className="text-warning text-decoration-none">info@vikahrubbers.com</a></p>

  {/* Social Icons */}
  <div className="d-flex gap-2">
    <Link to="/facebook" className="btn btn-outline-light btn-sm"><i className="fab fa-facebook-f"></i></Link>
    <Link to="/twitter" className="btn btn-outline-light btn-sm"><i className="fab fa-twitter"></i></Link>
    <Link to="/instagram" className="btn btn-outline-light btn-sm"><i className="fab fa-instagram"></i></Link>
    <Link to="/youtube" className="btn btn-outline-light btn-sm"><i className="fab fa-youtube"></i></Link>
    <Link to="/linkedin" className="btn btn-outline-light btn-sm"><i className="fab fa-linkedin-in"></i></Link>
  </div>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 small border-top pt-3">
          © Copyright 2020. VikahRubbers All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
