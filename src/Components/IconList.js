import React from "react";
import Icon from "./Icons";

export default function IconList({
  items = [
    { title: "", subtitle: "", icon: "check", iconColor: "blue", iconSize: 23 },
  ],
}) {
  const renderItems = items.map((item) => {
    return (
      <div className="row justify-content-start py-0 align-items-center" key={item.title} >
        <div className="col-1 flex-grow-0">
          <Icon name={item.icon} color={item.iconColor} size={item.iconSize} />
        </div>
        <div className="col-9">
          <h4
            style={{
              fontFamily: "open-sans",
              fontWeight: "bold",
              fontSize: "1.25rem",
              lineHeight: "0px",
            }}
          >
            {item.title}
          </h4>
        </div>
        <div className="row justify-content-start py-0 align-items-center" style={{marginTop:"-10px"}}>
          <div className="col-1 flex-grow-0">{/* Empty */}</div>

          <div className="col-9">
            <p className="description">{item.subtitle}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="cinder-people">{renderItems}</div>;
}
