import React from "react";
import Testimonial from "../../Components/Testimonial";

export default function Testimonials() {
  return (
    <div className="cinder-people py-5">
      <h2 className="text-center">Customer Testimonials</h2>
      <br />
      <div className="testimonials">
        <div
          className="carousel slide h-auto w-100 mx-auto"
          data-bs-ride="carousel"
          data-bs-interval="2000"
          data-bs-pause="none"
          id="testimony-slider"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Testimonial author="Emmanuel Austine"/>
            </div>
            <div className="carousel-item">
              <Testimonial author="Cinder Build" color="purple"/>
            </div>
            <div className="carousel-item" >
              <Testimonial author="Aje Damilola" color="#2222dd"/>
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-target="#testimony-slider" data-bs-slide="prev" style={{zIndex:"999999"}}>
            <span className="carousel-control-prev-icon p-3 bg-primary rounded-circle"></span>
          </button>
          <button className="carousel-control-next" data-bs-target="#testimony-slider" data-bs-slide="next" style={{zIndex:"999999"}}>
            <span className="carousel-control-next-icon p-3 bg-primary rounded-circle"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
