import React from "react";
import Color from "color";
//   color = "#1366e2",

export default function Testimonial({
  color = "#1366e2",
  author,
  content = "Do magna deserunt sit dolore proident. Incididunt consectetur laboris in ad sit. Ea incididunt cillum reprehenderit sit sit eu id ea. Nulla culpa ut enim pariatur tempor laboris.",
  image = "",
}) {
  //calculating the colour shades
  let colorShades = [];
  let newColour = new Color(color);
  for (var i = 0; i < 3; i++) {
    colorShades.push(newColour.lighten(0.2 * i));
  }

  return (
    <div className="text-center text-white w-100" style={{ minHeight: 400 }}>
      {/* Background Contents */}
      <>
        {" "}
        <div
          className="mx-auto testimonial-box"
          style={{
            backgroundColor: colorShades[2],
            transform: "translateY(0px)translateZ(-50px)scale(.8)",
            color: "transparent",
          }}
        >
          <p
            style={{
              fontFamily: "roboto",
            }}
          >
            {content}
          </p>
          <h3
            className="pt-3"
            style={{
              fontFamily: "open-sans",
              fontSize: "1.2rem",
              letterSpacing: 1,
            }}
          >
            <b> {author} </b> <br />
            <small
              style={{
                fontSize: "0.9rem",
                opacity: 0.8,
              }}
            >
              Web Developer
            </small>
          </h3>
        </div>
        <div
          className="mx-auto testimonial-box"
          style={{
            backgroundColor: colorShades[1],
            transform: "translateY(30px)translateZ(-30px)scale(.9)",
            color: "transparent",
          }}
        >
          <p
            style={{
              fontFamily: "roboto",
            }}
          >
            {content}
          </p>
          <h3
            className="pt-3"
            style={{
              fontFamily: "open-sans",
              fontSize: "1.2rem",
              letterSpacing: 1,
            }}
          >
            <b> Aje Damilola </b> <br />
            <small
              style={{
                fontSize: "0.9rem",
                opacity: 0.8,
              }}
            >
              Web Developer
            </small>
          </h3>
        </div>
      </>

      {/*Main Content */}
      <div
        className="mx-auto testimonial-box"
        style={{
          backgroundColor: colorShades[0],
          transform: "translateY(60px)",
        }}
      >
        <p
          style={{
            fontFamily: "roboto",
          }}
        >
          {content}
        </p>
        <h3
          className="pt-3"
          style={{
            fontFamily: "open-sans",
            fontSize: "1.2rem",
            letterSpacing: 1,
          }}
        >
          <b> {author} </b> <br />
          <small
            style={{
              fontSize: "0.9rem",
              opacity: 0.8,
            }}
          >
            Web Developer
          </small>
        </h3>
      </div>

      {/* Footer Image */}
      <div
        className="mx-auto testimonial-box d-flex flex-column align-items-center justify-content-end"
        style={{ color: "transparent", transform: "translateY(60px)" }}
      >
        {content}
        <img
          src={image ? image : require("../../assets/img/logos/logo4.jpg")}
          className="testimonial-img position-absolute"
          alt=""
          style={{
            bottom: "-120px",
            border: `.3rem solid ${colorShades[0]}`,
            borderRadius: "100%",
            width: 100,
            height: 100,
          }}
        />
      </div>
    </div>
  );
}
