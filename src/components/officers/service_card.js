import React from 'react';
import './generic_card.css'
import serviceOfficer_image from '../../images/jake-gilbert-headshot.PNG';

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
                <img id="img" src={serviceOfficer_image} alt="serviceOfficer_image" />   
                <h3 id="text"> Jake Gilbert - Service Officer </h3>
                
            </row>
            <row id="row2">
                <h4 id="text"> 
                    Jake is a third year at UGA and he is majoring in exercise and sports science.
                    A fun fact about him is that he's been skiing since he was able to walk!
                    He is most excited to meet all the new members this year! 
                    </h4>
            </row>
        </div>
    )

}

export default OfficerCard;