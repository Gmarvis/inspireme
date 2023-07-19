import React from "react";
import "./newslater.css";

export const NewsLaters = () => {
  return (
    <div className="mainsection">
      <div className="latters">
        <h2>Newsletters</h2>
        <form action="submit">
          <input type="email" placeholder="youremail@gmail.com" />
          <button>Subscribe</button>
        </form>
        <p>Get the latest career advice delivered straight to your inbox.</p>
      </div>
    </div>
  );
};
