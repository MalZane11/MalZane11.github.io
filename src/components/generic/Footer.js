import React from "react";
import './Footer.css';
import insta from '../../icons/instagram.svg';
import groupme from '../../icons/groupme.png';
import involve from '../../icons/involvement.png';

const Footer = () => {

    return(
        <div className="GenericFooter">
            <div className="IconRow">
            <a href="https://instagram.com/athenscampusministry" target="_blank"><img src={insta} alt="insta-icon" /></a>
            <a href="https://groupme.com/join_group/69675152/Zl5Lfe2q" target="_blank"><img src={groupme} alt="groupme-icon" /></a>
            <a href="https://uga.campuslabs.com/engage/organization/athens_campus_ministry" target="_blank"><img src={involve} alt="involve-icon" /></a>
            </div>
            <b>Contact Us</b>
            <h6>&copy; Cason Pittman & Mallory Jones</h6>
        </div>
    )

}

export default Footer;