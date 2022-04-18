import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinks({
  title = "",
  links = [{ label: "", to: "" }],
}) {
  let index = 0;
  return (
    <div className="w-100 mx-auto">
      <h4>{title}</h4>
      <ul className="nav flex-column py-4">
        {links.map((link) => {
          index++;
          return (
            <li className="nav-item text-muted" key={index}>
              <Link to={link.to} className="text-decoration-none text-muted hover-link" about={link.label}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
