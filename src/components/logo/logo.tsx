import { Link } from 'react-router-dom';
import clsx from 'clsx';

import css from './logo.module.css';

interface LogoProps {
    textColor?: string;
}

export default function Logo({ textColor }: LogoProps) {
    return (
        <Link
            to="/"
            lang="en"
            className={clsx(css.logoType, textColor === 'footer' && css.textColor)}
            title="До головної сторінки"
        >
            <span className={css.logo}>World</span>Recipes
        </Link>
    );
}
