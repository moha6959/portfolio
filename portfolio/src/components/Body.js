// Create your Body component here
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Avatar from "../assets/Software.png"
import React from "react";
const Body =() => {
    return (
      <div id="body" className="body">
        <div className="body-container">
            <div className="body-profile">
                <img className="body-img" alt="avatar" src={Avatar}/>
            </div>
            <div className="body-content">
                <div className="body-headline">Mohamedek Aden</div>
                <div className="body-text">Software Architect</div>
            </div>
            <div className="body-icons">
                <a href="https://www.educative.io" target="_blank" rel="noreferrer"className="icon-link"><i><FaGithub/></i></a>
                <a href="https://www.educative.io" target="_blank" rel="noreferrer"className="icon-link"><i><FaLinkedin/></i></a>

            </div>
        </div>
      </div>
    )
        
    
}
export default Body;