import React from "react";
import logo from "../../assets/img/logo.svg";
import FooterLinks from "../../Components/FooterLinkGroup";

export default function Footer() {
  return (
    <footer className="bg-white mt-3 pt-6 w-100 pb-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4">
            <h3>
              <img src={logo} alt="cinderbuild" />
            </h3>
            <p className="text-muted py-4">
              Africa's Building materials' Marketplace
            </p>
          </div>
          <div className="col-md-8 row col-12 justify-content-evely accordion-flush" id="footer-accordion">
            <div className="col-md-3 col-6">
              <FooterLinks
                title="Company"
                links={[
                  { label: "About us", to: "#" },
                  { label: "Contact Us", to: "#" },
                  { label: "Privacy Policy", to: "#" },
                  { label: "Terms and Conditions", to: "#" },
                ]}
              />
            </div>
            <div className="col-md-3 col-6">
              <FooterLinks
                title="Products"
                links={[
                  { label: "Cement", to: "#" },
                  { label: "Electrical", to: "#" },
                  { label: "Housing", to: "#" },
                  { label: "Flooring", to: "#" },
                  { label: "Doors and Accessories", to: "#" },
                ]}
              />
            </div>
            <div className="col-md-3 col-6">
              <FooterLinks
                title="Features"
                links={[
                  { label: "CinderBuild for Buyers", to: "#" },
                  { label: "CinderBuild for Sellers", to: "#" },
                ]}
              />
            </div>
            <div className="col-md-3 col-6">
              <FooterLinks
                title="Resources"
                links={[
                  { label: "Youtube", to: "#" },
                  { label: "Instagram", to: "#" },
                  { label: "Facebook", to: "#" },
                  { label: "Twitter", to: "#" },
                ]}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="text-muted text-center">
            &copy; {new Date().getFullYear()} CinderBuild
        </div>
      </div>
    </footer>
  );
}
