import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";
import Footer from "../Footer/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import img from "../../public/images/aboutimages/about3.jpg";

import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_94inhbj",
      "template_3m82lti",
      form.current,
      "rcUovNPnkumF3UlZC"
    );

    e.target.reset();
  };

  return (
    <div className="contactmain">
      <motion.div
        className="contactus"
        animate={{ opacity: [0, 0, 1] }}
        exit={{ opacity: [1, 1, 0] }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <div className="contact-header">
          <h2>CONTACT</h2>
          <hr />
        </div>
        <div className="contact-direction">
          <div className="contact-direction-card1">
            <h3>NAIROBI</h3>
            <br />
            <br />
            <div className="c-d-p">
              <p>
                Navigators Complex Kindaruma Road, <br /> Off Ngong Road,
                <br /> <br /> Nairobi Kenya <br />
                <br />
                Tel: +254(0)732649117 <br />
                <br /> www.talco.co.ke <br /> <br /> info@talco.co.ke
                <br />
                <br />
                (Visit by appointment only)
              </p>
            </div>
            <div className="dir-btn">
              <Link>
                <Button text={"GET DIRECTIONS"} />
              </Link>
            </div>
          </div>
          <div className="contact-direction-card2">
            <img src={img} alt="" />
          </div>
        </div>
        <section id="contact">
          <div className="contact-header">
            <h5>Get in Touch</h5>
            <hr />
            <br />
          </div>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>vinnef@gmail.com</h5>
                <a href="mailto:vinnef@gmail.com" target="_blank">
                  Send a Message
                </a>
              </article>
              <article className="contact__option">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messenger</h4>
                <h5>Talco Contractors</h5>
                <a
                  href="https://www.facebook.com/talcocreators?mibextid=LQQJ4d"
                  target="_blank"
                >
                  Send a Message
                </a>
              </article>
              <article className="contact__option">
                <BsWhatsapp className="contact__option-icon" />
                <h4>Whatsapp</h4>
                <h5>+254720740006</h5>
                <a href="https://wa.me/+254720740006" target="_blank">
                  {/* <a href =  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`> */}
                  Send a Message
                </a>
              </article>
            </div>

            {/** END OF CONTACT OPTIONS **/}

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="contact-chek">
                <input type="checkbox" />
                <h5>Subscribe to our news Letter?</h5>
              </div>
              <div className="contact-btn">
                <Button text={"Send Message"} />
              </div>
            </form>
          </div>
        </section>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
