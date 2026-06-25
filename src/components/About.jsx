import React from "react";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import resumePDF from "../assets/Resume/Shreyansh.pdf";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <div className="about-text glass-card animate-fade-in">
            <h3>I'm Shreyansh Vala, a Passionate React Developer</h3>
            <p>
              I am a fresher React developer with a strong foundation in modern
              web technologies. I specialize in building responsive,
              interactive, and visually stunning web applications. My journey in
              web development started with HTML, CSS, and JavaScript, and I
              quickly gravitated towards React for its component-based
              architecture and powerful ecosystem.
            </p>
            <p>
              I am always eager to learn new technologies and improve my skills.
              Whether it's mastering advanced React concepts, exploring new CSS
              frameworks like Tailwind, or building complex state management
              systems, I approach every challenge with enthusiasm.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <User className="detail-icon" />
                <div>
                  <span className="detail-label">Name</span>
                  <span className="detail-value">Shreyansh Vala</span>
                </div>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">India</span>
                </div>
              </div>
              <div className="detail-item">
                <Briefcase className="detail-icon" />
                <div>
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">Fresher</span>
                </div>
              </div>
              <div className="detail-item">
                <GraduationCap className="detail-icon" />
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-value">
                    Bachelor of Engineering in Information Technology (B.Sc. IT){" "}
                    <br />
                    Master of Science in Information Technology (M.Sc. IT) –
                    Pursuing
                  </span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
