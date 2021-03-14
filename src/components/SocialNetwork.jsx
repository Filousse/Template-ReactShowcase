import React from 'react';
import {Link} from "react-router-dom"

const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://github.com/Filousse" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
           <li><i className="fab fa-github"></i></li>
        </a>
        <a href="https://www.linkedin.com/in/thibault-brasseur-developpeurweb/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
            <li><i className="fab fa-linkedin"></i></li>
        </a>
        <Link to="/assets/files/CV.ThibaultBrasseur.pdf" target="_blank"    className="hover" onMouseOver={anim}>
            <li><i className="far fa-file-pdf"></i></li>
        </Link>
      </ul>
    </div>
  );
};

export default SocialNetwork;