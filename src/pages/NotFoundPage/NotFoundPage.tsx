import '../../index.css';

import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import Button from '../../components/Button/Button';
import clsx from 'clsx';

export default function NotFoundPage() {
    return (
        <section className={clsx('section', css.section)}>
            <div className={clsx('container', css.container)}>
                <h2 className={css.title}>404 🚧</h2>
                <p className={css.text}>Oops!!!! Sorry!!!! Page not found</p>
                <Link to="/"> {<Button>Go home</Button>}</Link>
            </div>
        </section>
    );
}
