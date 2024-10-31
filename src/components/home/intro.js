import React from  "react";
import './intro.css'

/**
 * The Intro should Include:
 * What we believe in
 * What newcomers should expect (Are we a small or big group? Are we a certain denomination? etc)
 * What we do (Bible studies, group activies, service projects)
 * Our goals (Grow our faith, friendships, etc)
 * @returns 
 */
const Intro = () => {

    return (
        <div className="genericIntro">
            <h1 id="genericWelcome">
                Welcome to Athens Campus Ministry!
                </h1>
                <p id="genericBody"> We at Athens Campus Ministry are a small group of UGA students 
                    that want to grow our faith in Jesus and foster deeper connections 
                    with other Christians on UGA’s campus. We want to increase the understanding 
                    of the Bible amongst UGA students and ourselves by holding weekly Bible studies. 
                    We also aim to serve our community by volunteering in service projects 
                    and we aim to create close friendships through fun group activities. 
                    While we are not associated with a certain church or denomination, 
                    most of us are members of the Church of Christ. 
                    If you’re looking to learn more about the Bible with people who share 
                    similar interests, come join us!</p>
        </div>
    )

}

export default Intro;