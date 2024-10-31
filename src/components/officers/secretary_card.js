import React from 'react';
import './generic_card.css'
import secretary_image from '../../images/mallory-jones-headshot.JPG';

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
                <img id="img" src={secretary_image} alt="secretary_image" />   
                <h3 id="text"> Mallory Jones - Secretary </h3>
                
            </row>
            <row id="row2">
                <h4 id="text"> 
                    Mallory is a junior at UGA. 
                    A fun fact about her is that she enjoys swimming as a sport! 
                    This year, she is most excited to help our club grow spiritually 
                    through improving our resources and our relationship to the Athens community! 
                    </h4>
            </row>
        </div>
    )

}

export default OfficerCard;