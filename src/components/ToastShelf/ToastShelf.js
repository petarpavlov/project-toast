import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf({}) {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ variant, message, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
