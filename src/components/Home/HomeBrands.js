import React from "react";
import BrandImage from "./BrandImage";

export default function HomeBrands() {
  return (
    <div className="shop-brands">
      <div className="container">
        <h2>Shop By Brands</h2>
        <div className="row g-3 my-4">
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand1.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand2.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand3.jpg")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand4.jpg")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand6.jpg")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand7.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand8.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand9.jpg")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand10.jpg")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand1.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand2.png")}
              dimensions={[180, 150]}
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <BrandImage
              image={require("../../assets/img/brand3.jpg")}
              dimensions={[180, 150]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
