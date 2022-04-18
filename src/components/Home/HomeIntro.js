import React from "react";
import Icon from "./Icons";
import img from "../../assets/img/back-exteriorpng.png";
import img2 from "../../assets/img/slideImage.png";

export default function HomeIntro() {
  return (
    <div>
      <div className="home-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 order-1 order-md-0 ">
              <h1 className="title">
                <strong style={{ fontWeight: 900 }}>
                  Africa’s Building Materials Marketplace
                </strong>
              </h1>
              <p className="description">
                CinderBuild brings bulk off-takers and suppliers onto one
                collaborative platform streamlining the materials procurement
                process from requisition to delivery.
              </p>
              <button className="btn btn-primary btn-lg px-5 py-3">
                Get Started <Icon name="arrow-right" color="white" />
              </button>
            </div>
            <div className="col-sm-12 col-md-5 order-0 order-md-1 text-center text-md-start d-none d-md-inline text-end">
              <div className="slider">
                <div className="slider-inner">
                  <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    id="introslider"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={img} alt="cinder build" className="img" />
                      </div>
                      <div className="carousel-item">
                        <img src={img2} alt="cinder build" className="img" />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      data-bs-slide="prev"
                      data-bs-target="#introslider"
                      type="button"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                      className="carousel-control-next"
                      data-bs-slide="next"
                      data-bs-target="#introslider"
                      type="button"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 intro-container">
        <img
          style={{ width: "100vw", height: 10, marginTop: -20 }}
          src="data:image/png;base64,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"
          alt="..."
        />
      </div>
    </div>
  );
}
