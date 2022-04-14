import React from "react";
import IconList from "./IconList";

export default function CinderPoeple() {
  return (
    <div className="cinder-people py-3">

      <div className="container">
        {/* For Buyers */}
        <div className="row align-items-center  gy-3">
          <div className="col-12 col-md-6 order-1 order-md-0">
            <h2>CinderBuild for Buyers</h2>
            <p className="description">
              Sunt pariatur est reprehenderit laborum aliquip ullamco velit
              incididunt sunt tempor excepteur magna. Ex in aliqua dolore eu.
              Reprehenderition. Sunt pariatur est reprehenderit laborum aliquip
              ullamco velit incididunt sunt tempor excepteur magna
            </p>
            <IconList
              items={[
                {
                  title: "Save Time",
                  subtitle:
                    "Save time by stream lining all your material purchases from a single platform with a click from a button",
                  iconColor: "blue",
                  icon: "clock",
                  iconSize: 20,
                },
                {
                  title: "Save Cost",
                  subtitle:
                    "Save Cost by Accessing the lowest price deals in the market through bundle-discount offering",
                  iconColor: "blue",
                  icon: "check-circle",
                  iconSize: 20,
                },
                {
                  title: "Financing",
                  subtitle:
                    "with cinder-build you can MAKE payment and finace with ease at the comfort of your home.",
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
              src={require("../../assets/img/illustrations/cinder-buyer's Phone.png")}
              className="img-fluid"
              alt="cinder buyers"
            />
          </div>
        </div>

        {/* For Sellers */}
        <div className="row align-items-center py-5 gy-3">
          <div className="col-12 col-md-6 text-center text-md-start">
            <img
              src={require("../../assets/img/illustrations/cinder-seller's Phone.png")}
              className="img-fluid"
              alt="cinder buyers"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>CinderBuild for Sellers</h2>
            <p className="description">
              Sunt pariatur est reprehenderit laborum aliquip ullamco velit
              incididunt sunt tempor excepteur magna. Ex in aliqua dolore eu.
              Reprehenderition. Sunt pariatur est reprehenderit laborum aliquip
              ullamco velit incididunt sunt tempor excepteur magna
            </p>
            <IconList
              items={[
                {
                  title: "Sell More",
                  subtitle:
                    "Sell More By Reaching an Unlimted Audience Of Buyers Through a single platform",
                  iconColor: "blue",
                  icon: "shopping-cart",
                  iconSize: 20,
                },
                {
                  title: "Secure Payment",
                  subtitle:
                    "Recieve Payment with ease and without worry.Payments made with cinderBuild are highly secure and encrypted",
                  iconColor: "blue",
                  icon: "lock",
                  iconSize: 20,
                },
                {
                  title: "Zero Charges",
                  subtitle:
                    "Save cost by incurring zero-fee logins and trasparent transfers",
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
