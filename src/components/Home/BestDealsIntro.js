import React from "react";
import ProductCard from "./ProductCard";

export default function BestDealsIntro() {
  return (
    <div className="container py-6 best-deals img-scale">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 id="title1">We Offer You the best Deals</h2>
          <p>
          Over 1000+ products available from top brands that you trust, browse through products and start shopping
          </p>
        </div>
      </div>
      <div className="row gx-4 gy-5 py-3">
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/cement.jpg")} name="Cement"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/cables.jpg")} name="Blocks"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/steelIron.jpg")} name="steel and iron"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/alluminium.jpg")} name="Iron"/>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/doors.jpg")} name="Cement"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/paint.jpg")} name="Blocks"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/tiles.jpg")} name="steel and iron"/>
        </div>
        {/* Single Product */}
        <div className="col-lg-3 col-md-4 col-6">
          <ProductCard image={require("../../assets/img/pipes.jpg")} name="Iron"/>
        </div>
      </div>
      <div className="text-center py-4">
        <a href="/" className="text-decoration-none">View All Categories</a>
      </div>
    </div>
  );
}
