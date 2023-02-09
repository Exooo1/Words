import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <cite>Vlas Maskalenchik</cite>
      <address>
        Minsk <time>@2022-2023</time>
      </address>
    </footer>
  )
}
