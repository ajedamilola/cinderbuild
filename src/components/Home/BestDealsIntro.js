import React from "react";
import demoImage from "../../assets/img/bg1.jpeg";
import ProductCard from "./ProductCard";

export default function BestDealsIntro() {
  return (
    <div className="container py-6 best-deals">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>We Offer You the best Deals</h2>
          <p>
            Do consequat elit elit fugiat proident amet ad laborum id enim
            proident. Labore laborum sunt sint consequat.
          </p>
        </div>
      </div>
      <div className="row gx-4 gy-5 py-3">
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={demoImage} name="Cement"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={demoImage} name="Blocks"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={demoImage} name="Mortar"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={demoImage} name="Iron"/>
        </div>
      </div>
      <div className="text-center py-4">
        <a href="/" className="text-decoration-none">View All Categories</a>
      </div>
    </div>
  );
}
