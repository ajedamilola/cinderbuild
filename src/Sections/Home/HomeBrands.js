import React from "react";
import BrandImage from "../../Components/BrandImage";

export default function HomeBrands() {
  return (
    <div className="shop-brands">
      <div className="container">
        <h2>Shop By Brands</h2>
        <div className="row g-3 my-4">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand1.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand2.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand3.jpg")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand4.jpg")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand6.jpg")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand7.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand8.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand9.jpg")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand10.jpg")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand1.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand2.png")}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand3.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
