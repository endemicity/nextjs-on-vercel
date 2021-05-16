import { parseISO, format } from 'date-fns'

import styles from "../styles/date.module.css"

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className={styles.time} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
