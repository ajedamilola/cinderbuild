import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinks({
  title = "",
  links = [{ label: "", to: "" }],
}) {
  let index = 0;
  return (
    <div className="w-100 mx-auto accordion-item">
      <div className="accordion-header" id={`${title}-header`} >
        <button className="accordion-button collapsed" data-bs-toggle='collapse' data-bs-target={`#${title}-body`}>
          {title}
        </button>
      </div>
      <div className="accordion-collpase collapse" id={`${title}-body`} data-bs-parent="#footer-accordion">
        <ul className="nav flex-column accordion-body">
          {links.map((link) => {
            index++;
            return (
              <li className="nav-item text-muted" key={index}>
                <Link
                  to={link.to}
                  className="text-decoration-none text-muted hover-link"
                  about={link.label}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
