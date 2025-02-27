import React from 'react';
import css from './Button.module.css';

export default function Button({ children }: React.PropsWithChildren) {
    return (
        <button type="button" className={css.button}>
            {children}
        </button>
    );
}
