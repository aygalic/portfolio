import Link from 'next/link'
import styles from '../styles/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
      <Link href="https://github.com/aygalic" className={styles.homeLink} >
          github
        </Link>
        
        <Link href="https://www.linkedin.com/in/aygalic/" className={styles.homeLink} >
          LinkedIn
        </Link>
      </nav>
    </footer>
  )
}