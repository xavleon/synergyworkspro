import React from "react";
import "../styles/team.css";

export const TeamTrust = () => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Why Trust Our Team?</h2>
          <p>
            We take pride in maintaining the highest standards in the industry
          </p>
        </div>
        <div className="row credentials-row">
          <div className="col-md-6 col-sm-12">
            <div className="credentials-box">
              <div className="credentials-header">
                <i className="fa fa-shield-alt"></i>
                <h3>Our Guarantee</h3>
              </div>
              <ul className="credentials-list">
                <li>
                  <i className="fa fa-check"></i> Criminal background checks on
                  all staff
                </li>
                <li>
                  <i className="fa fa-check"></i> Fully bonded and insured up to
                  $2M
                </li>
                <li>
                  <i className="fa fa-check"></i> 100% satisfaction guarantee
                </li>
                <li>
                  <i className="fa fa-check"></i> Free re-clean if you're not
                  satisfied
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="credentials-box">
              <div className="credentials-header">
                <i className="fa fa-award"></i>
                <h3>Our Standards</h3>
              </div>
              <ul className="credentials-list">
                <li>
                  <i className="fa fa-check"></i> Professional grade equipment &
                  supplies
                </li>
                <li>
                  <i className="fa fa-check"></i> Eco-friendly cleaning options
                </li>
                <li>
                  <i className="fa fa-check"></i> Strict quality control
                  processes
                </li>
                <li>
                  <i className="fa fa-check"></i> Regular staff training &
                  certification
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row trust-indicators">
          <div className="col-md-12">
            <div className="trust-badges">
              <i className="fa fa-star"></i>
              <span className="badge-text">5-Star Rated Service</span>

              <i className="fa fa-clock"></i>
              <span className="badge-text">24/7 Availability</span>

              <i className="fa fa-calendar-check"></i>
              <span className="badge-text">Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
