import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


function SecondsCounter({ digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
            <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
}

export default SecondsCounter;