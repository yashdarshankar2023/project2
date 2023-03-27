import React from "react";
import "../styles/Tracker.css";

function Tracker() {
  return (
    <div className="home">
      <h1>How Helpy Moto Works ?</h1>
      <div className="home_list" >
        <div className="home_list_item">
          <div className="number1"><span>1</span></div>
          <div className="number2 ">
          <h3 >Select The Perfect Car Service</h3>
          <p>From Helpy Moto's broad portfolio of services</p>
          </div>
          <div className="number3">
            <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/Select-The-Perfect-Car-Service.png" alt=" "></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>2</span></div>
          <div className="number2 ">
          <h3 >Schedule Free Doorstep Pick-up</h3>
          <p>We offer free pick up and drop for all services booked</p>
          </div>
          <div className="number3">
            <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/Schedule-Free-Doorstep-Pick-up.png" alt=" "></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>3</span></div>
          <div className="number2 ">
          <h3 >Track Your Car Service Real-Time</h3>
          <p>We will take care of everything from here!</p>
          </div>
          <div className="number3">
            <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/track-your-car-service-real-time.png" alt=" "></img>
          </div>
          
        </div>
        <div className="home_list_item">
          <div className="number1"><span>4</span></div>
          <div className="number2 ">
          <h3 >Track Your Car Service Real-Time</h3>
          <p>We will take care of everything from here!</p>
          </div>
          <div className="number3">
            <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/Earn-While-We-Service.png" alt=" "></img>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Tracker;