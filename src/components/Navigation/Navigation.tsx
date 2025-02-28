import css from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export default function Navigation() {
    const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
        return clsx(css.menuLink, isActive && css.isActive);
    };

    return (
        <nav className={css.navigation}>
            <ul className={css.menu}>
                <li className={css.menuItem}>
                    <NavLink to="/" className={buildLinkClass}>
                        Home
                    </NavLink>
                </li>

                <li className={css.menuItem}>
                    <NavLink to="/favorite" className={buildLinkClass}>
                        Favorite
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
