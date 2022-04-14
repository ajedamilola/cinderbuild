import React from "react";
import Icon from "./Icons";
import image from "../../assets/img/intro-img.png";

export default function HomeIntro() {
  return (
    <div className="home-intro">
      <div className="row mx-5 align-items-baseline gy-3 gy-md-0">
        <div className="col-sm-12 col-md-6 order-1 order-md-0">
          <p className="description">
            <small>
              Cinder Build Esse velit laboris incididunt qui ut laboris culpa.
              Commodo consectetur et consectetur exercitation. Excepteur eu
              irure culpa
            </small>
          </p>
          <button className="btn btn-primary">
            GET STARTED <Icon name="arrow-right" color="white" />
          </button>
        </div>
        <div className="col-sm-12 col-md-6 order-0 order-md-1 text-center text-md-start">
          <img src={image} alt="cinder build" className="img-fluid"/>
        </div>
      </div>

    </div>
  );
}
