import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/index.module.css"
import {siteName} from "../components/constants"

export default function Home() {
  return (
    <>
      <div className={styles.profile}>
        <Image
          priority
          src="/profile.jpg"
          height={144}
          width={144}
          alt="Author photo"
          className={styles.image}
        />
        <h1 className={styles.title}>{siteName}</h1>
        <p className={styles.description}>
          There are many internet journals, but this one is <span className={styles.silly}>especially unnecessary</span>.
        </p>
        <p>
          <Link href="/building-this-site">
            <a>Building This Site</a>
          </Link>
        </p>
      </div>
    </>
  )
}