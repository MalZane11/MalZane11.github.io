import React from 'react';
import './generic_card.css'
import eventCoordinator_image from '../../images/angela-golden-headshot.JPG';

/**
 * Picture
 * Title
 * Description
 * Socials
 * @returns
 */
const OfficerCard = () => {

    return (
        <div className="generic_officer_card">
            <row id="row1">
                <img id="img" src={eventCoordinator_image} alt="eventCoordinator_image" />   
                <h3 id="text"> Angela Golden - Event Coordinator </h3>
                
            </row>
            <row id="row2">
                <h4 id="text"> 
                    Angela is a third year at UGA and she is a culinary science major with a
                    minor in food science. A fun fact about her is that she has her own small
                    business! She is most excited to meet new people in ACM and grow in friendship
                    and faith as a group!
                    </h4>
            </row>
        </div>
    )

}

export default OfficerCard;