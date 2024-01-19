import React from "react";
import '../../Main.css';
//todo: change fonts of <p> classes to: Poppins
function aboutRise() {
    return(
        <>
            <main class="landing-main">
                <div class="content-container">
                    <h1 class="title">ABOUT RISE</h1>
                    <div class="item-row left-image">
                        <img src="https://placehold.co/400x400" alt="A group of people engaged in a discussion in front of a poster presentation at a robotics and AI expo" />
                        <p>
                            The Robotics and Intelligent Systems Expo (RISE) aims to be on the frontier of showcasing innovation in the fields of robotics and autonomy. RISE's primary goal is to immerse attendees in the dynamic world of robotics and AI, showcasing the vast opportunities in these domains and igniting interest among students and faculty. We achieve this through robotics demonstrations, enlightening presentations, engaging networking sessions, and the presence of industry professionals. In doing so, we aim to connect individuals who share a passion for these fields while effectively highlighting Purdue University as a pioneering institution in the realm of robotics and AI.
                        </p>
                    </div>
                    <div class="item-row right-image">
                        <img src="https://placehold.co/400x400" alt="A group of people posing for a photo at the RISE 2023 event, with a RISE 2023 poster in the background" />
                        <p>
                            The initial RISE event, held in April 2023, proved to be a remarkable success. With 20 participating organizations and over 200 students in attendance from various disciplines across engineering and computer science, it became evident that there is a strong interest in robotics and AI-related research and activities on campus. Furthermore, the event has garnered significant attention from Purdue faculty and the broader research community, including undergraduate and graduate students passionate about the field.
                        </p>
                    </div>
                    <button class="cta-button">INITIAL RISE ARTICLE</button>
                    <div className="bluebox">
                        <p align style={{color:"white"}}>The Autonomous Robotics Club of Purdue provides an open space for members to explore the field of autonomous robotics through building and simulating robotic systems. This hands-on project work allows them to apply programming skills, problem-solving abilities, and teamwork in a collaborative environment, enhancing their practical skills and preparing them for future careers in the tech industry. Any Purdue student may join the club, without any experience or financial barriers in their way. While working on the projects, students are expected to share their knowledge with the greater community through outreach events and public demonstrations, fostering communication and presentation skills.</p>
                    </div>
                </div>
            </main>
        </>

    );
}

export default aboutRise;
