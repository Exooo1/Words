import React, { useEffect } from 'react'
import { changeTitle } from '../../../Common/usefulFuncs'
import styles from './notfound.module.scss'

export const NotFound = () => {
  useEffect(() => {
    changeTitle('Not Found')
  }, [])
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound_information}>
        <p>404</p>
        <h1>Page Not Found</h1>
        <p>We're sorry, the page you requested could not be found. Please go to back.</p>
      </div>
    </div>
  )
}
