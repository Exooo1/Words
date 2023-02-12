import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <cite>Released under the MIT License. (55b97113)
                    Copyright
                    <time>© 2022-present </time>
                    Vlas Maskalenchik</cite>
            </section>
            <section>
                <ul>
                    <li>instagram</li>
                    <li>github</li>
                    <li>linkedin</li>
                    <li>Telegram</li>
                </ul>
            </section>
        </footer>
    )
}
