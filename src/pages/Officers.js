import React from "react";
import './Officers.css';
import OfficerIntro from "../components/officers/officer_intro";
import PresidentCard from "../components/officers/president_card";
import VicePresidentCard from "../components/officers/vicePresident_card";
import EventCoordinatorCard from "../components/officers/eventCoordinator_card";
import ServiceOfficerCard from "../components/officers/service_card";
import SecretaryCard from "../components/officers/secretary_card";

/**
 * Officers page, that displays information on officers.
 */
const Officers = () => {


    return (

        <div className="OfficersPage">
           <OfficerIntro />
           <row id="row"> <PresidentCard /> <VicePresidentCard /> </row>
           <row id="row"> <EventCoordinatorCard /> <ServiceOfficerCard /> </row>
           <SecretaryCard />
            
        </div>

    )


}


export default Officers;