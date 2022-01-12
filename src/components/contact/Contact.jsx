import "./contact.css";
import Linkedin from "../../img/phone.png";
import Email from "../../img/email.png";

export default function Contact() {
  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's talk!</h1>
            <div className="c-info">

              <div className="c-info-item">
                <img src="https://www.freeiconspng.com/uploads/github-logo-icon-6.jpg" alt="" className="c-icon"/>
                <a href="https://github.com/TatianaPrada" target="blank">
                  github.com/TatianaPrada
                </a>
              </div>
              <div className="c-info-item">
              <img src="https://www.freeiconspng.com/uploads/email-marketing-icon-email-icon-1.png" alt="" className="c-icon"/>

                <a href="mailto: tatiana.prada092@gmail.com" target="blank">
                  tatiana.prada092@gmail.com
                </a>
              </div>

              

              <div className="c-info-item">
              <img src="https://www.freeiconspng.com/uploads/linkedin-icon-7.png" alt="" className="c-icon"/>

                <a href="https://www.linkedin.com/in/tatiana-prada/" target="blank">
                linkedin.com/tatiana-prada
                </a>
              </div>
            </div>
          </div>
          <div className="c-right"></div>
        </div>
      </div>
    </div>
  );
}
