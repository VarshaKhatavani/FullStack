import React from "react";
import "./04-contactCard.css";

const ContactCard = ({ name, job, email }) => {
  return (
    <ul>
      <li className="contact-card">
        <h2>{name}</h2>
        <dl>
          <dt>Job</dt>
          <dd>{job}</dd>
          <dt>Email</dt>
          <dd>{email}</dd>
        </dl>
      </li>
    </ul>
  );
};

/** 
 *  <ul>
      <li className="contact-card">
        <h2>Sunita Kumar</h2>
        <dl>
          <dt>Job</dt>
          <dd>Electrical Engineer</dd>
          <dt>Email</dt>
          <dd>sunita.kumar@acme.co</dd>
        </dl>
      </li>
      <li className="contact-card">
        <h2>Henderson G. Sterling II</h2>
        <dl>
          <dt>Job</dt>
          <dd>Receptionist</dd>
          <dt>Email</dt>
          <dd>henderson-the-second@acme.co</dd>
        </dl>
      </li>
      <li className="contact-card">
        <h2>Aoi Kobayashi</h2>
        <dl>
          <dt>Job</dt>
          <dd>President</dd>
          <dt>Email</dt>
          <dd>kobayashi.aoi@acme.co</dd>
        </dl>
      </li>
    </ul>
 * 
*/

export default ContactCard;
