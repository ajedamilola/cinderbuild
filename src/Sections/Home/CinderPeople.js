import React from "react";
import IconList from "../../Components/IconList";

export default function CinderPoeple() {
  return (
    <div className="cinder-people py-3">

      <div className="container">
        {/* For Buyers */}
        <div className="row align-items-center  gy-3">
          <div className="col-12 col-md-6 order-1 order-md-0">
            <h2>CinderBuild for Buyers</h2>
            <p className="description">
            As a CinderBuild verified Buyer, you’re guaranteed uninterrupted product availability, at the very best price, all the time. We achieve this for you by partnering with verified suppliers in your region.
            </p>
            <IconList
              items={[
                {
                  title: "Save Time",
                  subtitle:
                    "Save time by streamlining all your material purchases from a single platform at the click of a button.",
                  iconColor: "blue",
                  icon: "clock",
                  iconSize: 20,
                },
                {
                  title: "Save Cost",
                  subtitle:
                    "Save cost by accessing lowest price deals in the market through bundle-discount offerings.",
                  iconColor: "blue",
                  icon: "check-circle",
                  iconSize: 20,
                },
                {
                  title: "Financing",
                  subtitle:
                    "Increase your purchasing power by taking advantage of our product financing program.",
                  icon: "money-bill-alt",
                  iconColor: "blue",
                  iconSize: 20,
                },
              ]}
            />
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end order-0 order-md-1">
            <img
              src={require("../../assets/img/phone2.png")}
              className="img-fluid phone-img"
              alt="cinder buyers"
            />
          </div>
        </div>

        {/* For Sellers */}
        <div className="row align-items-center py-5 gy-3">
          <div className="col-12 col-md-6 text-center text-md-start">
            <img
              src={require("../../assets/img/phone.png")}
              className="img-fluid phone-img"
              alt="cinder buyers"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>CinderBuild for Sellers</h2>
            <p className="description">
            As a CinderBuild verified Seller, you’re guaranteed uninterrupted product demand, from the largest buyers, at all times. We achieve this for you by partnering with verified buyers in your region.
            </p>
            <IconList
              items={[
                {
                  title: "Sell More",
                  subtitle:
                    "Sell more by reaching an unlimited audience of buyers through a single platform.",
                  iconColor: "blue",
                  icon: "shopping-cart",
                  iconSize: 20,
                },
                {
                  title: "Secure Payment",
                  subtitle:
                    "Secure upfront payments through our escrow and invoice financing feature",
                  iconColor: "blue",
                  icon: "lock",
                  iconSize: 20,
                },
                {
                  title: "Zero Charges",
                  subtitle:
                    "Save costs by incurring zero signup fees and transparent transfer charges.",
                  icon: "check-circle",
                  iconColor: "blue",
                  iconSize: 20,
                },
              ]}
            />
            <button className="btn btn-primary mx-2">Get Started</button>
            <button className="btn btn-outline-primary mx-2">Contact US</button>
          </div>
        </div>

      </div>
    </div>
  );
}
