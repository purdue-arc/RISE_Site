import React from "react";
import '../../Main.css';
import Member from "../about/Member";
import ImageDefault from "../assets/arcgearlogo.png";
//todo: change fonts of <p> classes to: Poppins
function aboutRise() {
    let members = [];
    const memberData = [
        { name: 'Haddy Alchaer', role: 'ARC President', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Revanth', role: 'ARC Vice President', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Mouli Sangita', role: 'ARC Operations Chair', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Aytaj', role: 'ARC Treasurer', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Vijay Muthukumar', role: 'RISE Director', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Edgar Babajanyan', role: 'Lead Developer', image: ImageDefault, personalLink: 'https://linkedin.com' },
        { name: 'Nithin Anand', role: 'Lead Events Coordinator', image: ImageDefault, personalLink: 'https://linkedin.com' }
    ];


    for (let i = 0; i < memberData.length; i++) {
        members.push(
            <div className="team-member">
                <Member
                    name={memberData[i].name} role={memberData[i].role} img={memberData[i].image} link={memberData[i].personalLink}
                />
            </div>
        );
    }

    return (
        <>
            <main class="landing-main">
                <div class="content-container">
                    <h1 class="title">ABOUT RISE</h1>
                    <div class="item-row left-image">
                        <img src="https://i.imgur.com/vHjvzZo.png"
                            alt="A group of people engaged in a discussion in front of a poster presentation at a robotics and AI expo" />
                        <p>
                            The Robotics and Intelligent Systems Expo (RISE) aims to be on the frontier of showcasing
                            innovation in the fields of robotics and autonomy. RISE's primary goal is to immerse
                            attendees in the dynamic world of robotics and AI, showcasing the vast opportunities in
                            these domains and igniting interest among students and faculty. We achieve this through
                            robotics demonstrations, enlightening presentations, engaging networking sessions, and the
                            presence of industry professionals. In doing so, we aim to connect individuals who share a
                            passion for these fields while effectively highlighting Purdue University as a pioneering
                            institution in the realm of robotics and AI.
                        </p>
                    </div>
                    <div class="item-row right-image">
                        <img src="https://i.imgur.com/V8wxR17.png"
                            alt="A group of people posing for a photo at the RISE 2023 event, with a RISE 2023 poster in the background" />
                        <p>
                            The initial RISE event, held in April 2023, proved to be a remarkable success. With 20
                            participating organizations and over 200 students in attendance from various disciplines
                            across engineering and computer science, it became evident that there is a strong interest
                            in robotics and AI-related research and activities on campus. Furthermore, the event has
                            garnered significant attention from Purdue faculty and the broader research community,
                            including undergraduate and graduate students passionate about the field.
                        </p>
                    </div>
                    <a href="/program"
                        style={{ textDecoration: 'none', marginTop: '15px' }}>
                        <button style={{
                            backgroundColor: '#475569',
                            color: 'white',
                            border: 'none',
                            padding: '15px',
                            width: '100%',
                            maxWidth: '200px',
                            borderRadius: '10px',
                            fontFamily: 'Sansation'
                        }}>
                            Learn More
                        </button>
                    </a>
                    <div className="padding-med"></div>
                    <h1 className="title">ORGANIZING COMMITTEE</h1>
                    <div className="team-container">
                        {members}
                    </div>

                    <div className="bluebox" style={{ alignItems: 'center', height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <img src="https://i.imgur.com/0WmRC2K.png" height="200px" width="400px" alt="Logo" style={{ marginRight: '10px' }} />

                            <p align style={{ color: "white", flex: '1' }}>
                                The Autonomous Robotics Club of Purdue provides an open space
                                for members to explore the field of autonomous robotics through building and simulating
                                robotic systems. This hands-on project work allows them to apply programming skills,
                                problem-solving abilities, and teamwork in a collaborative environment, enhancing their
                                practical skills and preparing them for future careers in the tech industry. Any Purdue
                                student may join the club, without any experience or financial barriers in their way. While
                                working on the projects, students are expected to share their knowledge with the greater
                                community through outreach events and public demonstrations, fostering communication and
                                presentation skills.
                            </p>
                        </div>
                        <a href="https://purduearc.com"
                            style={{ textDecoration: 'none', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: '#95a5a6',
                                color: 'white',
                                border: 'none',
                                padding: '15px',
                                width: '150px',
                                borderRadius: '10px',
                                fontFamily: 'Sansation'
                            }}>
                                Learn More
                            </button>
                        </a>
                    </div>

                    <div className="greyboxIcon" style={{ alignItems: 'center', height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <img src="https://i.imgur.com/ZWrXwhp.png" height="200px" width="400px" alt="Logo" style={{ marginRight: '10px' }} />
                            <p align style={{ color: "white", flex: '1' }}>
                                The Institute for Control, Optimization and Networks (ICON) at Purdue University integrates
                                diverse expertise in the pursuit of innovative solutions to grand challenges in connected
                                and autonomous systems. Blending foundational approaches in control, optimization and
                                networks with recent advances in AI, machine learning and data science, ICON researchers are
                                revolutionizing application domains including uncrewed aerial, ground, and underwater
                                vehicles, intelligent transportation, supply chains, space logistics and assembly, precision
                                agriculture, smart cities, and advanced manufacturing, among others. ICON currently has more
                                than 80 affiliated faculty members from more than 12 departments across Purdue University.
                                For ICON to better serve the needs of industrial partners and further enhance collaboration
                                with industry in these areas, ICON offers options for annual membership.
                            </p>
                        </div>
                        <a href="https://engineering.purdue.edu/ICON" style={{ textDecoration: 'none' }}>
                            <button style={{
                                backgroundColor: '#ceb990',
                                color: 'white',
                                border: 'none',
                                padding: '15px',
                                width: '150px',
                                borderRadius: '10px',
                                fontFamily: 'Sansation'
                            }}>
                                Learn More
                            </button>
                        </a>
                    </div>


                </div>
            </main>
        </>

    );
}

export default aboutRise;
