import React, { useState } from "react";
import Icon from "./Icons";

export default function ProductPurchaseCard({
  image,
  name,
  location = "",
  company = "",
  price = undefined,
  rating = 0.0,
}) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card h-100 img-scale">
      <div className="card-header text-end bg-white border-0">
        <button className="btn" onClick={() => setLiked(!liked)}>
          <Icon name="heart" color={liked ? "pink" : "black"} />
        </button>
      </div>
      <div className="card-body py-0 my-0 d-flex justify-content-around align-content-around flex-column h-100">
        <img
          className="img card-img"
          src={image}
          alt={name}
          style={{ width: "100%",margin:"1rem 0rem" }}
        />
        <div>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              fontFamily: "open-sans",
            }}
          >
            {name}
          </h4>
          <div className="row">
            <div className="col-12 col-lg-7">
              {/* company Name and product price */}
              <a href="#" className="text-decoration-none">
                {company}
              </a>
              <br />
              <b className="text-danger">
                {price
                  ? new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(price)
                  : ""}
              </b>
            </div>
            <div className="col-12 col-lg-5">
              {/* location */}
              <div className="row justify-content-start">
                <div className="col-3">
                  <Icon name="map-marker-alt" color="grey" />
                </div>
                <div className="col-9">{location}</div>
              </div>
              {/* Ratings */}
              <div className="row justify-content-start">
                <div className="col-3">
                  <Icon name="star" color="gold" />
                </div>
                <div className="col-9">{rating}/5</div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        <button className="btn text-primary">
          {typeof price === "number" ? "Buy Now" : "Get Quote"}
        </button>
      </div>
    </div>
  );
}
