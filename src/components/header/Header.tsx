import { Link } from 'react-router-dom';
import css from './Header.module.css';
import '../../index.css';
import Logo from '../logo/logo';
import Navigation from './Navigation/Navigation';

export default function Header() {
    return (
        <header className={css.head}>
            <div className={`${css.headContainer} container`}>
                {' '}
                <Logo />
                <Navigation />
                <ul className={css.contact}>
                    <li className={css.contactItem}>
                        <svg className={css.contactsContMail} width="16px" height="12px">
                            <use href="/icons.svg#icon-email"></use>
                        </svg>
                        <Link to="mailto:maria.horog.89@gmail.com">
                            bryklin.best.1994@gmail.com
                        </Link>
                    </li>
                    <li className={css.contactItem}>
                        <svg className={css.contactsContMail} width="10px" height="16px">
                            <use href="/icons.svg#smartphone"></use>
                        </svg>
                        <Link to="tel:+380961050086"> +38 095 553 55 53</Link>
                    </li>
                </ul>
                <div className={css.cartShopping}>🛒</div>
            </div>
        </header>
    );
}
