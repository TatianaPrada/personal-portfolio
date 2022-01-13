import "./contact.css";
import {  useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


export default function Contact() {
    const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e0bs0ko",
        "template_bruj638",
        formRef.current,
        "user_hUaG1Zxnzj0LkavFW1I1H"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's talk!</h1>
            <div className="c-info">

              <div className="c-info-item">
              <img src="https://www.freeiconspng.com/uploads/linkedin-icon-7.png" alt="" className="c-icon"/>

                <a href="https://www.linkedin.com/in/tatiana-prada/" target="blank">
                linkedin.com/tatiana-prada
                </a>
              </div>
              <div className="c-info-item">
              <img src="https://www.freeiconspng.com/uploads/email-marketing-icon-email-icon-1.png" alt="" className="c-icon"/>

                <a href="mailto: tatiana.prada092@gmail.com" target="blank">
                  tatiana.prada092@gmail.com
                </a>
              </div>
              <div className="c-info-item">
                <img src="https://www.freeiconspng.com/uploads/github-logo-icon-6.jpg" alt="" className="c-icon"/>
                <a href="https://github.com/TatianaPrada" target="blank">
                  github.com/TatianaPrada
                </a>
              </div>

            </div>
          </div>
          
          <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thanks for your message, I'll reply you asap."}
          </form>
        </div>

        </div>
      </div>
    </div>
  );
}
