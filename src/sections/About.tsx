import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Rohan, and I am passionate about creating,
            desiging and developing web applications. My interest in web development began in 2016 when I was studying for my bachelor's degree. I created my first project, a Todo List, using Python and it ignited my passion for web development.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://www.charityright.org.au/" className="link" target="_blank">
              Charity Right.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, As a Software Engineer with 2 years of experience in Electrical Engineering. I specialize in troubleshooting and providing effective solutions to help businesses make a positive impact.
          </p>
          {/* <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p> */}
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            {/* <li className="about-grid-info-list-item">React Native</li> */}
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express</li>
            {/* <li className="about-grid-info-list-item">Kibana</li> */}
            <li className="about-grid-info-list-item">Ruby on Rails</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Rohan.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
