import styles from './Button.module.css';

interface Props {
  disabled?: boolean;
}

export const Button: FCWithChildren<Props> = ({ disabled, children }) => {
  return (
    <button className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};
