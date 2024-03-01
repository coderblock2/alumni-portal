import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from "@/components/layouts/PageHeader/PageHeader";
import "./page.css";
import director from "./Collections/director.png";
import {details} from './Collections/data'

const About = () => {
  return (
    <>
      <Header
        pageHeading="College Alumni"
        subHeading="Welcome College alumni and undergraduates! We hope you will explore the many ways to connect with the NIT Arunachal Pradesh community."
        bgImage="/header-bg/2023-06-07-1.jpg"
      />

      <div className="body">
      <div className="__page-content">
        <h1>ABOUT US</h1>
        <hr />
      </div>

      <div className="describe-about">
        <p>
          Welcome to the official alumni page of the National Institute of
          Technology, Arunachal Pradesh! As we reflect on our journey through
          academic excellence and personal growth, this platform serves as a
          beacon of connection for our esteemed alumni. Whether you graduated
          recently or decades ago, this space is dedicated to fostering
          meaningful connections, celebrating achievements, and nurturing a
          sense of belonging within our vibrant NITAP community. Join us as we
          continue to uphold the values of knowledge, integrity, and innovation
          instilled during our time at NIT Arunachal Pradesh. Together, let's
          pave the way for future generations and make a lasting impact on the
          world.
        </p>
        <hr />
      </div>

      <div className="director-section">
        <div className="director-photo">
          <img src={director} alt="Director's Photo" />
        </div>
        <div className="director-message">
          <h2>Director's Message</h2>
          <p>
            Dear Alumni, 
            <br /><br />
            It gives me immense pleasure to extend a warm welcome to all our esteemed alumni, the lifeblood of our institution.
            <br /><br />
            It is with great pride and warmth that I welcome you to
            our cherished alumni community at National Institute Of Technology
            Arunachal Pradesh. As the Director, I am privileged to witness the
            remarkable journeys of our alumni, each a testament to the
            excellence and values instilled during their time with us.
            <br /><br />
            As the director of this institution, I take pride in witnessing the remarkable journeys that each of you has embarked upon since your time here. Your achievements, both personal and professional, stand as a testament to the values instilled during your tenure with us.
            <br /><br />
            As you navigate through the ever-evolving landscape of life, know that you carry a piece of this institution within you. Your experiences, knowledge, and values serve as guiding lights, illuminating paths for those who follow in your footsteps.
            <br /><br />
            I urge you to stay connected, not only with each other but also with your alma mater. Your continued involvement enriches our community and contributes to the legacy of excellence that we proudly uphold.
            <br /><br />
            On behalf of the entire institution, I extend my heartfelt gratitude for your contributions and commitment. Together, let us continue to strive for greatness and make a lasting impact on the world.

          </p>
        </div>
      </div>

    <div className="coordinate-details">
      <h1>Cordinator's Details</h1>
      <hr />
  
        <div className="details">
        {details.map((coordinator, index) => (
        <div key={index} className="coordinator">
          
          <img src={coordinator.photo} alt={coordinator.name} />
          <h2>{coordinator.name}</h2>
          <p>{coordinator.details}</p>
          <p>{coordinator.Role}</p>
          {/* Add links to social media profiles */}
          <div className="social-links">
            <a href={coordinator.insta}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={coordinator.github}><FontAwesomeIcon icon={faGithub} /></a>
            <a href={coordinator.linkedln}><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          </div>
      ))}
        </div>
       </div>
       </div>
    </>
  );
};

export default About;
