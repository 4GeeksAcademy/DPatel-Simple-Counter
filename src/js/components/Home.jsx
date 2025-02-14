import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Simple Counter</h1>
      
     
      <div className="clock-icon">
        <FontAwesomeIcon icon={faClock} size="2x" />
      </div>
      
    </div>
  );
};

export default Home;