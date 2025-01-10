import clsx from 'clsx';

import styles from './Block.module.scss';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
}

const Block: React.FC<BlockProps> = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};

export default Block;
