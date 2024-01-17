import React from "react";
import '../../Main.css';
function aboutRise() {
    return(
        <>
            <main className="landing-main">
                <div className="bg-blue-100 p-10">
                    <h1 className="text-4xl font-bold text-center mb-6">ABOUT RISE</h1>
                    <div className="flex flex-col items-center gap-6">
                        <img src="https://placehold.co/200x200" alt="A group of people engaged in a discussion in front of a poster presentation at a robotics and AI expo" className="mb-6" />
                        <p className="text-lg mb-6">
                            The Robotics and Intelligent Systems Expo (RISE) aims to be on the frontier of showcasing innovation in the fields of robotics and autonomy. RISE's primary goal is to immerse attendees in the dynamic world of robotics and AI, showcasing the vast opportunities in these domains and igniting interest among students and faculty. We achieve this through robotics demonstrations, enlightening presentations, engaging networking sessions, and the presence of industry professionals. In doing so, we aim to connect individuals who share a passion for these fields while effectively highlighting the leading organizations in the realm of robotics and AI.
                        </p>
                        <img src="https://placehold.co/200x200" alt="A group of people posing for a photo at the RISE 2023 event, with a RISE 2023 poster in the background" className="mb-6" />
                        <p className="text-lg mb-6">
                            The initial RISE event, held in April 2023, proved to be a remarkable success. With 20 participating organizations and over 200 students in attendance from various disciplines across engineering and computer science, it became evident that there is a strong interest in robotics and AI-related research and activities on campus.
                            <br/><br/>
                            Furthermore, the event has garnered significant attention from Purdue faculty and the broader research community, including undergraduate and graduate students passionate about the field.
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">INITIAL RISE ARTICLE</button>
                    </div>
                </div>
            </main>
        </>

    );
}

export default aboutRise;
