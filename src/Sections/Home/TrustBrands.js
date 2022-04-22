import React from "react";
import BrandImage from "../../Components/BrandImage";

export default function TrustBrands() {
  return (
    <div className="shop-brands py-5">
      <div className="container">
        <h2>Trusted By Top Brands</h2>
        <div
          className="carousel slide w-100 mx-auto"
          data-bs-ride="carousel"
          id="trusted-brands-slider"
        >
          <div className="carousel-inner">
            {/**Slider Item */}
            <div className="carousel-item active" data-bs-interval="2000">
              <div className="py-5 row justify-content-center align-items-center px-4 gy-2">
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo4.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo2.png")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo5.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo6.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo1.png")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo1.png")}
                    dimensions={[150, 100]}
                  />
                </div>
              </div>
            </div>

            {/**Slider Item */}
            <div className="carousel-item" data-bs-interval="2000">
              <div className="py-5 row justify-content-center align-items-center px-4 gy-2">
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo4.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo2.png")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo5.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo6.jpg")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo1.png")}
                    dimensions={[150, 100]}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <BrandImage
                    image={require("../../assets/img/logos/logo1.png")}
                    dimensions={[150, 100]}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#trusted-brands-slider"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#trusted-brands-slider"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
