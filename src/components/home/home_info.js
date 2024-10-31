import react from "react";
import './home_info.css';
//import statements

/**
 * constant meeting times
 * contact 
 * @returns
 */
const HomeInfo = () => {

    return (
        <div className="generic_home_info">
            <div className="meeting_times">
                <h2 id="meeting_times_title">
                    Bible Study
                </h2>
                <p id="biblestudy">We have a Bible study every Tuesday at 7pm in Tate!! Check the calendar or GroupMe for the specific room.</p>
            </div>
        </div>
    )

}

export default HomeInfo;