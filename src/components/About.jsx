import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        My name is
        {' '}
        <a
          href="https://www.linkedin.com/in/dktevishwajeetpawar/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Vishwajeet Pawar
        </a>
        {' '}
        a passionate Java Full Stack Developer with a B.Tech in Computer Science and Engineering (2023). With a strong foundation in Java, Spring Boot, React.js, JSP/Servlets, and MySQL, I’ve built a range of full-stack applications including e-commerce platforms, exam registration systems, and company websites.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
        I have hands-on experience in implementing secure authentication, responsive UIs, RESTful APIs, and CRUD operations following MVC architecture. My technical toolkit includes Hibernate, JDBC, Firebase, Razorpay integration, and deployment on modern platforms like Vercel. 
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        Currently, I’m gaining practical exposure as a Java Full Stack Intern at Archer Infotech, Pune, where I continue to deepen my expertise. I’m eager to contribute to innovative software projects and grow in a collaborative, fast-paced environment.
        {' '}
        <a
          href="https://github.com/Rhaegar121"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {/* {' '}
          2500+ contributions on GitHub */}
        </a>
        {/* {' '}
        within a single year. Additionally, my roles in the Students&apos;
        Union honed my problem-solving and communication abilities. */}
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        If you&apos;re inspired by what you see and have a project that&apos;s ready to come to life, don&apos;t hesitate to reach out. I&apos;m just a message away, eager to collaborate on your next big endeavor.
        {' '}
        <a
          href="https://drive.google.com/file/d/1zoWFhONFs-wX4wYhXt4FvuAyc9fqzm88/view?usp=drivesdk"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Access my resume
        </a>
        {' '}
        to explore my journey, qualifications, and the knowledge I bring to the table.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
