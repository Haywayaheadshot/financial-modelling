import React from 'react';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div>
      <h1 className="contact-header">Thank you for checking out my project</h1>
      <p className="contact-thanks-note">
        I will like to thank Microverse for impacting this knowledge.
        Thank you to my colleagues Diego Garcia and Jose Zepada who
        helped me when I had blockers. If you
        loved this project please do not hesitate to give a STAR on Github.
      </p>
      <div className="contact-authors">
        <h1>Authors Github Usernames</h1>
        <br />
        <h3>ABUBAKAR UMMAR: @Haywayaheadshot</h3>
        <h3>DIEGO GARCIA: @taldr27</h3>
        <h3>JOSE ZEPADA: @J2ZROMERO</h3>
      </div>
    </div>
  );
}
