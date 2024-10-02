import Link from 'next/link'
import styles from '../styles/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.homeLink}>
          Home
        </Link>
      </nav>
    </header>
  )
}