import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, handleDismiss, id }) {
  const { dismissToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant] || Info;
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {' '}
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
