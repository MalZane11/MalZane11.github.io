import React from 'react';
import './Home.css';
import HomeInfo from '../components/home/home_info';
import Intro from '../components/home/intro';
import Socials from '../components/home/socials';

/**
 * WHAT WE WANT:
 * Introduction to Club
 * Generic Info
 * Links to Social Media
 * @returns Home`
 */
const Home = () => {

return(
    /** Header, CurrentEvents,ClubInfo,Footer */
    <div className='GenericHome'>
        <Intro />
        <HomeInfo />
        <Socials />
    </div>
    );
};


export default Home;