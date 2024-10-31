import React from 'react';
import './generic_card.css'
import president_image from '../../images/katie-homewood-headshot.jpg';

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
                <img id="img" src={president_image} alt="president_image" />   
                <h3 id="text"> Katie Homewood - President </h3>
                
            </row>
            <row id="row2">
                <h4 id="text"> 
                    Katie is a fourth year at UGA and she is majoring in psychology with a
                    minor in spanish. A fun fact about her is that she loves working out
                    and staying active! She is most excited to cultivate deeper community
                    with the other members of ACM through bible studies and social events!
                    </h4>
            </row>
        </div>
    )

}

export default OfficerCard;