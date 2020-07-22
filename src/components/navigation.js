import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import get from 'lodash/get'

export default ({categories}) =>{

  return (
  <nav role="navigation">
    <div className={styles.logo}>
        <Link to="/" className={styles.logolink}>Dagens Kapital</Link>
    </div>
    
    <ul className={styles.navigation}>
      {categories.map(category => (
        <li className={styles.navigationItem}>
          <Link to={"/"+category.nameId}>{category.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)}