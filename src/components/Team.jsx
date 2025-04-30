import React from "react";
import "../styles/team.css";
export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Our Professional Standards</h2>
          <p>
            Every member of our cleaning team is carefully selected,
            background-checked, and professionally trained to deliver
            exceptional service.
          </p>
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <div className="team-icon">
                <i className="fa fa-user-check fa-3x"></i>
              </div>
              <div className="caption">
                <h4>Rigorous Vetting</h4>
                <p>Background-checked & reference-verified professionals</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <div className="team-icon">
                <i className="fa fa-award fa-3x"></i>
              </div>
              <div className="caption">
                <h4>Professional Training</h4>
                <p>Comprehensive training in latest cleaning techniques</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <div className="team-icon">
                <i className="fa fa-shield-alt fa-3x"></i>
              </div>
              <div className="caption">
                <h4>Insured & Bonded</h4>
                <p>Full coverage for your peace of mind</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <div className="team-icon">
                <i className="fa fa-heart fa-3x"></i>
              </div>
              <div className="caption">
                <h4>Satisfaction Guaranteed</h4>
                <p>100% satisfaction or we'll re-clean for free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
