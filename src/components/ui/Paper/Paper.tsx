import styles from './Paper.module.css';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const Paper: FCWithChildren<Props> = ({ className, children }) => {
  return <div className={cn(styles.paper, className)}>{children}</div>;
};
