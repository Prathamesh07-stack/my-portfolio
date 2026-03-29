import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/prathamesh-vernekar"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — prathamesh-vernekar
              </a>
            </p>
            <p>
              <a
                href="mailto:prathameshvernekar53@gmail.com"
                data-cursor="disable"
              >
                prathameshvernekar53@gmail.com
              </a>
            </p>
            <p>Goa, India · +91-9699629115</p>
            <h4>Education</h4>
            <p>
              B.E. Electronics & Telecommunication Engineering,
              Goa College of Engineering — 2021–2025
            </p>
            <p>
              Higher Secondary (Science),
              G.V.M's SNJA Higher Secondary School — 2019–2021
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Prathamesh07-stack"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prathamesh-vernekar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:prathameshvernekar53@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Prathamesh Vernekar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
