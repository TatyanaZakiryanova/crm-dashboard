import clsx from 'clsx';
import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = 'Search',
  size = 'medium',
  className,
}) => {
  return (
    <div className={styles.wrapper}>
      <Search className={styles.icon} size={18} />
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(styles.input, styles[size], className)}
      />
    </div>
  );
};

export default Input;
