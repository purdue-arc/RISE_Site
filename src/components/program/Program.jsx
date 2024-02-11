import React from "react";
import "../../Main.css";
// import riseLogo from "../assets/riselogo.png";
import Footer from "../../Footer";
import "../../Main.css";
import riseLogo from "../assets/riselogo.png";
import ScheduleDay from "./ScheduleDay";
import Test from "./Test";
import program2 from "../assets/program2.jpeg";
import program3 from "../assets/program3.png";

import LocationDetails from "./location-details/LocationDetails";
import RiseWeek from "./rise-week/RiseWeek";
function Program() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <nav className="landing-nav">
          <ul>
            <a href="/" className="header-logo-link">
              <img src={riseLogo} alt="Logo" className="header-logo" />
            </a>
            <li className="nav-link">
              <a href="/about">ABOUT</a>
            </li>
            <li className="nav-link">
              <a href="/registration">REGISTRATION</a>
            </li>
            <li className="nav-link">
              <a href="/program">PROGRAM</a>
            </li>
            <li className="nav-link">
              <a href="/sponsorship">SPONSORSHIP</a>
            </li>
            <li className="nav-link">
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="padding-med"></section>
      <main className="landing-main">
        {/* Existing About section */}
        <section className="hero">
          <h3 className="other-text">PROGRAM</h3>
        </section>
      </main>
      <section className="padding-large"></section>

      <LocationDetails />
      <div className="padding-med"></div>
      <div class="item-row left-image">
        <img
          src={program2}
          alt="A group of people engaged in a discussion in front of a poster presentation at a robotics and AI expo"
        />
        <p>
          <h2 className="booth">BOOTHS:</h2>
          Each organization participating will have an allotted booth space and
          table to set up their poster, demo, and any additional material which
          showcases their innovative work. These personalized booths will be run
          for the entirety of the event, allowing for continuous engagement with
          attendees and more in-depth explanations of the displayed projects.
        </p>
      </div>
      <div class="item-row right-image">
        <img
          src={program3}
          alt="A group of people posing for a photo at the RISE 2023 event, with a RISE 2023 poster in the background"
        />
        <p>
          <h2 className="booth">PRESENTATIONS:</h2>
          There will be a total of 12 presentations lasting 10 minutes each,
          along with 5 additional minutes for Q&A. There will also be 3 Keynote
          Speakers, each of whom will receive 45 minutes, including the time for
          Q&A. The event will open and close with remarks from the RISE
          committee and affiliated individuals.
        </p>
      </div>
      <div className="center-text">
        <h1 className="exclusive-events">
          <strong>EXCLUSIVE EVENTS</strong>
        </h1>
        <h2 className="spotlight-day">SPOTLIGHT DAY</h2>
        <p className="spotlight-description">
          A 4 hour session dedicated to each of our 3 Platinum Partners. 1 hour
          will be spent on a presentation showcasing the organization’s work,
          and the rest of the time is for networking exclusively with Purdue
          students and faculty.
        </p>
        <h2 className="prelude-session">PRELUDE SESSION</h2>
        <p className="prelude-description">
          A session for Gold and Platinum Partners to showcase their work
          outside of RISE. Each Partner will have their own booth in a shared
          space in which they can display their demos and any additional
          material.
        </p>
      </div>
      <RiseWeek />
      <ScheduleDay />

      <Footer />
    </div>
  );
}

export default Program;
