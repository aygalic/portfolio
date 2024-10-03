import Link from 'next/link'
import styles from '../styles/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
      <Link href="/" className={styles.homeLink} >
          github
        </Link>
        
        <Link href="/" className={styles.homeLink} >
          LinkedIn
        </Link>
      </nav>
    </footer>
  )
}