import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
		<b>
		{/* Greetings, fellow thinkers! */}
		  Welcome, curious minds!
		</b>
      </h1>
      <h1 className={styles.title}>
		{/* Let's dive in! */}
		Unleash your potential.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/style9.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
		    Revolutionize how you learn, work, and create – the possibilities are limitless.
		  </h1>
          <p className={styles.postDesc}>
            Are you constantly overwhelmed by the flood of information, ideas, and tasks that bombard you daily? Enter the concept of the "second brain" – a revolutionary approach to organizing and managing your digital life.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
