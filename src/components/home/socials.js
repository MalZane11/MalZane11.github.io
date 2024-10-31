import React from "react";
import './socials.css';
import insta_color from '../../images/instagram_colorful.jpg';
import groupme_color from '../../images/groupme_colorful.jpg';
import involve from '../../icons/involvement.png';

/**
 * Section of the page with links to our 
 * @returns 
 */
const Socials = () => {


    return (
        <div className="genericSocials">
            <h1>Socials</h1>
            <p1 id="genericSubText">Follow us on Instagram!</p1>
            <a href="https://instagram.com/athenscampusministry" target="_blank" rel="noreferrer"><img src={insta_color} alt="instagram-logo" /></a>
            <p1 id="genericSubText">Join our GroupMe!</p1>
            <a href="https://groupme.com/join_group/69675152/Zl5Lfe2q" target="_blank" rel="noreferrer"><img src={groupme_color} alt="groupme-logo" /></a>
            <p1 id="genericSubText">Become a member of ACM on the Involvement Network!</p1>
            <a href="https://uga.campuslabs.com/engage/organization/athens_campus_ministry" target="_blank" rel="noreferrer"><img src={involve} alt="involve-icon" /></a>
        </div>
    )

}

export default Socials;