import React, { useState, useEffect } from 'react';
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/cropped_image.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import twitterIconLight from "../../assets/twitter-light.svg";
import twitterIconDark from "../../assets/twitter-dark.svg";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import linkedinIconLight from "../../assets/linkedin-light.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
  const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
  const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;

  const [showFrontend, setShowFrontend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFrontend(prevShowFrontend => !prevShowFrontend);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile-pic-of-Nitesh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="theme-icon-mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Nitesh Kumar</h1>
        <div className={styles.roleContainer}>
          <h2 className={`${styles.role} ${showFrontend ? styles.show : styles.hide}`}>Frontend Developer</h2>
          <h2 className={`${styles.role} ${!showFrontend ? styles.show : styles.hide}`}>Data Scientist</h2>
        </div>
        <span>
          <a href="https://github.com/Samratnitesh">
            <img src={githubIcon} alt="github-profile" />
          </a>
          <a href="https://x.com/nitesh01042">
            <img src={twitterIcon} alt="twitter-profile" />
          </a>
          <a href="www.linkedin.com/in/nitesh-kumar23">
            <img src={linkedinIcon} alt="linkedin-profile" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate Frontend Developer and Data scientist. Love to build and
          deploy models and web apps
        </p>
        <a href={cv} download>
          <button className="hover">My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
