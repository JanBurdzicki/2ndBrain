import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/brain.png" alt="second brain blog" width={50} height={50} />
          <h1 className={styles.logoText}>2ndBrain Blog</h1>
        </div>
        <p className={styles.desc}>
          Unlock the power of your second brain with innovative strategies and techniques designed to supercharge your productivity and creativity. Discover how to harness the potential of your second brain to organize thoughts and achieve peak mental performance.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/discord.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Discord</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
