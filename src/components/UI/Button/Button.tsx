import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  size = 'medium',
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
      className={clsx(styles.button, styles[size], className, disabled ? styles.disabled : '')}
    >
      {children}
    </button>
  );
};

export default Button;
