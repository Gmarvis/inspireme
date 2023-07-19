import React from "react";
import "./landing.css";
import { NavSection } from "../components/navbar/nav";
import { NewsLaters } from "../components/newslater/newsletter";
import { ABoutUs } from "../components/about/about";
export const LandingPage = () => {
  return (
    <div>
      <div>
        <NavSection />
        <div>
          <div className="mainContainer">
            <div className="content">
              <h1>Inspiring Youth in Career Growth</h1>
              <p>
                Dedicated to inspiring youth in career growth. We believe that
                everyone has the potential to achieve their dreams, and we want
                to help young people find the resources and support they need to
                succeed.
              </p>
              <div className="landingBtn">
                <button>Visit Blog</button>
                <button>About Us</button>
              </div>
            </div>

            <div className="picture">
              <img
                src="https://images.pexels.com/photos/9287491/pexels-photo-9287491.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
        <ABoutUs />
      </div>

      {/* <NewsLaters /> */}
    </div>
  );
};
