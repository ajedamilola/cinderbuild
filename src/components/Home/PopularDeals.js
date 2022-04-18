import React from "react";
import Icon from "./Icons";
import ProductPurchaseCard from "./ProductPurchaseCard";

export default function PopularDeals() {
  const ProductCard = ProductPurchaseCard;
  return (
    <div className="shop-brands py-6">
      <div className="container">
        <h2>Popular Deals</h2>
        <div className="row my-4 gy-3">
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand2.png")}
              name="Dangote PLC 30K Grade Cement 50KG Bag"
              price={2000}
              company="Dangote L.T.D"
              location="Lagos"
              rating={4.4}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/cables.jpg")}
              name="10mm Simple Core Cuvix Wore"
              price={60000}
              company="Cuvix PLC"
              location="Lagos"
              rating={3.2}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand3.jpg")}
              name="1.5mm Curvix Electrical Plate"
              company="Cuvix PLC"
              location="Abuja"
              rating={4.9}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand5.jpg")}
              name="1.5mm Curvix Electrical Plate"
              company="Cuvix PLC"
              location="Abuja"
              rating={4.9}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand3.jpg")}
              name="Dangote PLC 30K Grade Cement 50KG Bag"
              price={2000}
              company="Dangote L.T.D"
              location="Lagos"
              rating={4.4}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand10.jpg")}
              name="10mm Simple Core Cuvix Wore"
              price={60000}
              company="Cuvix PLC"
              location="Lagos"
              rating={3.2}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand3.jpg")}
              name="1.5mm Curvix Electrical Plate"
              company="Cuvix PLC"
              location="Abuja"
              rating={4.9}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <ProductCard
              image={require("../../assets/img/brand8.png")}
              name="1.5mm Curvix Electrical Plate"
              company="Cuvix PLC"
              location="Abuja"
              rating={4.9}
            />
          </div>
          
        </div>

        {/* Guarantees */}
        <div className="row mt-6 mb-3 mx-3 gy-3 justify-content-center text-center">
            <div className="col-lg-3 col-md-4 col-6">
                <div className="d-flex flex-row">
                    <Icon name="check-circle" size={24}  color="gray"/>
                    <span className="ms-3">Quality Products</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                <div className="d-flex flex-row">
                    <Icon name="money-bill-alt" size={24}  color="gray"/>
                    <span className="ms-3">Low Price guarantee</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                <div className="d-flex flex-row">
                    <Icon name="handshake" size={24}  color="gray"/>
                    <span className="ms-3">Low Interest Financing</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
                <div className="d-flex flex-row">
                    <Icon name="truck" size={24}  color="gray"/>
                    <span className="ms-3">Fast Delivery</span>
                </div>
            </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
