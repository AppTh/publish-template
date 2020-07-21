import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    
    <ul className={styles.navigation}>
      <li className={styles.logo}>
        <Link to="/" className={styles.logolink}>Logotypen</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/fintech">Fintech</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/industri">Industri</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/sport">Sport å skit</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/politik">Politik?</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/är-detta-ens-på-riktigt">Motorfinans</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/:(">Detta</Link>
      </li>
    </ul>
  </nav>
)
