import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Service1 from "../assets/service-1.jpg";
import Service2 from "../assets/service-2.jpg";
import Service3 from "../assets/service-3.jpg";
import Service4 from "../assets/service-4.jpg";
// import "../styles/servicing.css";


export default function Service() {
  return (
    <>
      <h1 className="text-center test-success my-5">
        Why Service of Helpy Moto?
      </h1>
      <div className="container" style={{marginLeft:"5%"}}>
        <div className="row gy-3">
          <div className="col-md-3">
            <div className="card">
              <img src={Service1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Available anytime, anywhere</h5>
                <p className="card-text">
                    We are to be had for 24*7 everywhere in India. You can lease a mechanic every time through our app or through our internet site after filling a few details. Everything might be on your fingertips only.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={Service2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fair service cost</h5>
                <p className="card-text">
                    We are right here to present great provider at great price or even you're cashless then no want to worry, you've got plenty of choice to pay both card charge or on-line charge (Paytm, UPI or Net Banking).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={Service3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Use quality spare parts</h5>
                <p className="card-text">
                    We deal with your automobile as our automobile. We handiest use excellent spare elements and up-to-date tools to serve your automobile. You can declare to recognize the enterprise and excellent of the spare merchandise in each way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={Service4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Proven safety mechanism</h5>
                <p className="card-text">
                    We provide you with highly qualified, well-trained, proven and 100% reliable mechanics who provide you with the best service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
