import React from "react";
import "../styles/TopBannerSale.css";

export const TopBannerSale = () => {
  console.log("TopBannerSale component is mounting");

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="pricing-banner" onClick={scrollToPricing}>
      <div className="banner-content">
        <span className="banner-text">
          🌟 Limited Time: Get Professional Cleaning at Just $0.15/Sq Ft!
        </span>
        <button className="learn-more-btn">Claim Offer Now →</button>
      </div>
    </div>
  );
};
