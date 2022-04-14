import React from "react";
import Color from "color";
//   color = "#1366e2",
export default function Testimonial({
  color = "#1366e2",
  author,
  content = "Do magna deserunt sit dolore proident. Incididunt consectetur laboris in ad sit. Ea incididunt cillum reprehenderit sit sit eu id ea. Nulla culpa ut enim pariatur tempor laboris.",
  image = "",
}) {
  const colorShade = [];
  for (const i of [1, 2, 3]) {
    colorShade.push(Color(color).lighten(0.2 * i));
  }

  return (
    <div className="text-center text-white w-100">
      <div className="mx-auto" style={{ width: "min-content" }}>
        {/* Background at the back */}
        <div
          className="mx-auto testimonial-box"
          style={{
            backgroundColor: colorShade[2],
            transform: "translate3d(0,-20%,-30px)scale(0.8)",
          }}
        >
          <p style={{ fontFamily: "roboto", color: colorShade[2] }}>
            {content}
          </p>
        </div>
        {/* Background at the back */}
        <div
          className="mx-auto testimonial-box"
          style={{
            backgroundColor: colorShade[1],
            transform: "translate3d(0,-10%,-30px)scale(0.9)",
          }}
        >
          <p style={{ fontFamily: "roboto", color: colorShade[1] }}>
            {content}
          </p>
        </div>
        <div
          className="mx-auto testimonial-box"
          style={{
            backgroundColor: colorShade[0],
          }}
        >
          <p style={{ fontFamily: "roboto" }}>{content}</p>
          <h2
            className="pt-3"
            style={{ fontFamily: "open-sans", fontSize: "1.2rem" }}
          >
            <b>Aje Damilola</b>
            <br />
            <small style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Web Developer
            </small>
          </h2>
        </div>
      </div>
      <div className="mx-auto testimonial-box d-flex flex-column align-items-center justify-content-end">
        <div style={{color:"transparent"}}>{content}</div>
        <img
          src={require("../../assets/img/logos/logo4.jpg")}
          className="testimonial-img position-absolute"
          alt=""
          style={{bottom:"-120px",border:`.3rem solid ${colorShade[0]}`,borderRadius:"100%" }}
        />
      </div>
    </div>
  );
}
