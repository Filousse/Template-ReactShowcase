import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main>
        <Mouse />
        <motion.div
          className="contact"
          exit="out"
          animate="in"
          initial="out"
        //   variants={pageTransition}
        //   transition={transition}
        >
          <Navigation />
          <Logo />
          <ContactForm />
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>adresse</h4>
                <p>1 rue de la louisiane</p>
                <p>31200 Toulouse</p>
              </div>
            </div>
            <div className="phone">
              <div className="content">
                <h4>téléphone</h4>
                <CopyToClipboard text="0642844284" className="hover">
                  <p
                    style={{cursor: 'pointer'}}
                    className="clipboard"
                    onClick={() => {
                      alert("Téléphone copié !");
                    }}
                  >
                    06 63 36 46 90
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <div className="email">
              <div className="content">
                <h4>email</h4>
                <CopyToClipboard text="fsagency@gmail.com" className="hover">
                  <p
                    style={{cursor: 'pointer'}}
                    className="clipboard"
                    onClick={() => {
                      alert("Email copié !");
                    }}
                  >
                    brasseur.blz@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <SocialNetwork />
          </div>
          <ButtonsBottom left={"/projet-4"} />
        </motion.div>
      </main>
    );
};

export default Contact;