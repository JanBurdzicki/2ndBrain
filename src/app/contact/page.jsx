"use client";

import Image from "next/image";
import styles from "./contactPage.module.css";
// import Menu from "@/components/Menu/Menu";

const ContactPage = () => {

  return (
	<div className={styles.container}>
    <h1>Contact Us</h1>
	<h1 className={styles.desc}>
      You can contact us via this email: office@2ndbrain.com
	</h1>
	<div className={styles.content}>
	</div>
  </div>
  );
};

export default ContactPage;
