import React from 'react'
import styles from './Loader.module.scss'

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.ldsRipple} />
    </div>
  )
}

export default Loader