import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import DateFormat from "../dateFormat/DateFormat";

const Card = ({ key, item }) => {
	return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
		    <DateFormat dateString={item.createdAt} dateFormat={"MM.dd.y"} /> -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: `<p>${item?.desc.substring(3, item?.desc.length - 4).split(/\s+/).slice(0, 60).join(" ")}...<\p>` }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
