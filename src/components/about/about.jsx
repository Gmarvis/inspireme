import React from "react";
import "./about.css";

export const ABoutUs = () => {
  return (
    <div className="about">
        <img src="https://i.pinimg.com/564x/35/41/c3/3541c3b6682ab4e45585772265d60e0f.jpg" alt="" />
      <div>

        <div className="aboutContainer">
          <h2>
            About INSPIRE<span>ME</span>
          </h2>
          <p>Inpireme was founded in 2023 by two young entrepreneurs who were passionate about helping other young people achieve their career goals. We believe that everyone has the potential to succeed, and we want to provide the resources and support that young people need to reach their full potential.</p>

          <p>Our team of experienced career coaches and counselors have helped thousands of young people find their dream jobs. We offer a variety of services, including career coaching, resume writing, interview training, and job search assistance.</p>

          <p>We are committed to providing our clients with the highest quality of service. We believe that everyone deserves the opportunity to achieve their dreams, and we are here to help make that happen.</p>
          <button className="aboutBtn">Learn More</button>
        </div>
      </div>
    </div>
  );
};
