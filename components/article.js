import Link from "next/link";
import Date from "../components/date"
import styles from "../styles/article.module.css"

export default function Article({ children, meta }) {
  var coverImageStyle = {
    backgroundImage: 'url(' + meta.cover + ')',
  }

  return (
    <>
      <div className={styles.cover} style={coverImageStyle}>
        <header className={styles.heading}>
          <h1 className={styles.title}>{meta.title}</h1>
          <div className={styles.description}>{meta.description}</div>
          <div className={styles.posted}>
            Posted in <span className={styles.theme}>{meta.theme}</span> on <Date dateString={meta.date} />
          </div>
          <div className={styles.arrow}>&darr;</div>
        </header>
      </div>
      <article className={styles.article}>{children}</article>
      <footer className={styles.footer}>
        <Link href="/"><a>Back to Home</a></Link>
      </footer>
    </>
  );
}