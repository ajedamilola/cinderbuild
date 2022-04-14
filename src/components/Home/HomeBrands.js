import React from "react";
import BrandImage from "./BrandImage";

export default function HomeBrands() {
  return (
    <div className="shop-brands">
      <div className="container">
        <h2>Shop By Brands</h2>
        <div className="row g-3 my-4">
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo1.png")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo2.png")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo3.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo4.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo5.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo6.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo7.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo8.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo9.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo10.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo5.jpg")} dimensions={[180,150]} />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage image={require("../../assets/img/logos/logo3.jpg")} dimensions={[180,150]} />
          </div>
        </div>
      </div>
    </div>
  );
}
