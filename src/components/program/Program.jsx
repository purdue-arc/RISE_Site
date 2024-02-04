import React from "react";
import "../../Main.css";
import riseLogo from "../assets/riselogo.png";
import Footer from "../../Footer";
import "../../Main.css";
import riseLogo from "../assets/riselogo.png";
import ScheduleDay from "./ScheduleDay";
import LocationDetails from "./location-details/LocationDetails";
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
          src="https://placehold.co/400x400"
          alt="A group of people engaged in a discussion in front of a poster presentation at a robotics and AI expo"
        />
        <p>
          Each organization participating will have an allotted booth space and
          table to set up their poster, demo, and any additional material which
          showcases their innovative work. These personalized booths will be run
          for the entirety of the event, allowing for continuous engagement with
          attendees and more in-depth explanations of the displayed projects.
        </p>
      </div>
      <div class="item-row right-image">
        <img
          src="https://placehold.co/400x400"
          alt="A group of people posing for a photo at the RISE 2023 event, with a RISE 2023 poster in the background"
        />
        <p>
          There will be a total of 12 presentations lasting 10 minutes each,
          along with 5 additional minutes for Q&A. There will also be 3 Keynote
          Speakers, each of whom will receive 45 minutes, including the time for
          Q&A. The event will open and close with remarks from the RISE
          committee and affiliated individuals.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Program;
