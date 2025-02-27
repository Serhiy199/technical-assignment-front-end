import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
export default function Navigation() {
    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <header className={css.headerStyle}>
            <nav>
                <NavLink className={buildLinkClass} to="/">
                    Home
                </NavLink>
                <NavLink className={buildLinkClass} to="/movies">
                    Movies
                </NavLink>
            </nav>
        </header>
    );
}
