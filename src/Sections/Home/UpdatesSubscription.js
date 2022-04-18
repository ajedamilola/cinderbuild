import React from "react";
import bg from "../../assets/img/bg.png";
export default function UpdatesSubscription() {
  return (
    <div className="my-5 updates">
      <div className="container">
        <div class="row gx-0">
          <div className="bg col-12 col-md-8 px-5 d-flex justify-content-end flex-column">
            <h1>
              Get updates
              <br /> on our latest deals
            </h1>
           <div className="pb-4">
             <input placeholder="input your email address" className="form-control"/>
           </div>
            <div>
              <button className="btn btn-primary btn-lg">Submit</button>
            </div>
          </div>
          <div className="col-md-4 p-0 d-none d-md-inline">
            <img src={bg} alt="..."/>
          </div>
        </div>
      </div>
    </div>
  );
}
