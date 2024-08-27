import React from 'react';
import useKeydown from '../hooks/use-keydown';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      variant: 'notice',
      message: 'I am a notice toast',
      id: crypto.randomUUID(),
    },
    {
      variant: 'error',
      message: 'I am an error toast',
      id: crypto.randomUUID(),
    },
  ]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  useKeydown('Escape', handleEscape);

  function createToast(variant, message) {
    const nextToasts = [
      ...toasts,
      {
        variant,
        message,
        id: crypto.randomUUID(),
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
