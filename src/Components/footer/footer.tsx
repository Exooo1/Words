import React from 'react'
import github from '../../Assets/Images/github.svg'
import telegram from '../../Assets/Images/telegram.svg'
import linkedin from '../../Assets/Images/linkedin.svg'

import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <ul>
                    <li><a rel="noreferrer" target='_blank' href="https://github.com/Exooo1/Words"><img
                        src={github} alt="github"/></a></li>
                    <li><a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/vlasmaskalenchik/"><img
                        src={linkedin} alt="linkedin"/></a></li>
                    <li><a rel="noreferrer" target='_blank' href="https://t.me/Vlasmaskalenchik"><img
                        src={telegram} alt="telegram"/></a></li>
                </ul>
            </section>
            <section>
                <p>Released under the MIT License. Vlas Maskalenchik<time>© 2022-present </time></p>
            </section>
        </footer>
    )
}
