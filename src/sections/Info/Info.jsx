import styles from "./InfoStyles.module.css";

function Info() {
  return (
    <section id="info" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <div className={styles.info}>
        <p className={styles.description}>
          Hello <span>&#128400;</span>! My name is <b>Nitesh Kumar</b>, and I am currently in my final year of
          pursuing a Bachelor of Engineering in Computer Science at Sant
          Longowal Institute of Engineering and Technology, located in Sangrur,
          Longowal. Throughout my academic journey, I have developed a strong
          proficiency in <b>Data Science, Machine Learning, and Frontend Development</b>
          . I am passionate about leveraging technology to solve
          real-world problems and continuously strive to expand my skill set. My
          experiences have equipped me with a solid foundation in both
          theoretical and practical aspects of computer science, and I am
          excited to bring my knowledge and enthusiasm to new challenges and
          opportunities.
        </p>
      </div>
    </section>
  );
}

export default Info;
