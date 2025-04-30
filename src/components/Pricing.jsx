import React from "react";
import "../styles/Pricing.css";

export const Pricing = () => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Pricing</h2>
          <p>Affordable • Reliable • No Hidden Fees</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Basic Package</h3>
                <div className="price">
                  <span className="amount">$0.15</span>
                  <span className="period">/sq ft</span>
                </div>
                <p className="subtitle">You provide cleaning supplies</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>✓ Professional cleaning service</li>
                  <li>✓ Fast turnaround</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Top-tier service</li>
                </ul>
              </div>
              <a
                href="tel:+9178600115"
                className="btn btn-custom btn-lg page-scroll"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>Premium Package</h3>
                <div className="price">
                  <span className="amount">$0.25</span>
                  <span className="period">/sq ft</span>
                </div>
                <p className="subtitle">We bring all materials</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>✓ All basic package features</li>
                  <li>✓ We provide all cleaning supplies</li>
                  <li>✓ Premium cleaning products</li>
                  <li>✓ Deep cleaning included</li>
                </ul>
              </div>
              <a
                href="tel:+9178600115"
                className="btn btn-custom btn-lg page-scroll"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="row additional-info">
          <div className="col-md-12">
            <p>Perfect for offices, schools, gyms, warehouses & more.</p>
            <p>Fast turnaround. Flexible scheduling. Top-tier service.</p>
            <div className="cta-section">
              <p className="cta-text">Call or text now for a free quote!</p>
              <a href="tel:+9178600115" className="phone-number">
                917 860 0115
              </a>
              <p>Or Email us at info@synerproclean.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
