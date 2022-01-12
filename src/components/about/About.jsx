import "./about.css";
import AboutMe from "../../img/hiring-people.png";
import Award from "../../img/insignia.png"
import Slide from 'react-reveal/Fade';



export default function About() {
    return (
        <div className="a">
        <Slide left>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={AboutMe} alt="" className="a-img" />
                </div>
            </div>
        </Slide>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">  I'm Tatiana Prada, web developer located in Porto, focused on both Front-end and Back-end technologies.      
                </p>
                <p className="a-desc">
                  
                   My journey into programming world began learning JavaScript fundamentals by myself, and from my first
                    'Hello world' I was strung out, so I decided to dive into the code world, taking a full-time
                     Web Development Bootcamp in IronHack, during which I learned some of the most important 
                     technologies, involving both front and back-end. <br></br>
                     Throughout my experience as languages teacher and customer service representative, I developed 
                     communicative, problem-solving and organizing skills, that help me in my daily coding times. 
                </p>
                <div className="a-award">
                    <a href="https://www.credential.net/b1223a61-8bdf-4b7e-b50f-3cdd2fdd01eb#gs.m6tad9" target="blank"><img src={Award} alt="" className="a-award-img" /></a>
                    <div className="a-award-text" >
                        <h4 className="a-award-title">Graduation Certificate</h4>
                        <p className="a-award-desc">Web Developement Bootcamp - Ironhack 2021</p>
                    </div>
        </div>
            </div>
        </div>
    );
}
