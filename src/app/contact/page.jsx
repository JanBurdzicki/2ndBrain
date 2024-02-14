"use client";

import Image from "next/image";
import styles from "./contactPage.module.css";
// import Menu from "@/components/Menu/Menu";

const ContactPage = () => {

  return (
	<div className={styles.container}>
	<div className={styles.content}>
	  <div className={styles.post}>
		<div className={styles.description}>

		 <p className={styles.desc}>
		 Got a question, suggestion, or just want to say hi? We'd love to hear from you! Drop us a line and we'll get back to you as soon as possible. Your feedback is invaluable to us as we strive to create content that resonates with our readers. Let's stay connected!
		 </p>
		 <br></br>
		 <p className={styles.desc}>
	      You can contact us via this email: office@2ndbrain.com
	  </p>
	</div>
	</div>
	</div>
  </div>
  );
};

export default ContactPage;
