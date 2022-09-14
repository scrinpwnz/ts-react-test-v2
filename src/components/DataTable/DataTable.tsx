import styles from './DataTable.module.css';
import { FC } from 'react';
import { Paper } from '../ui/Paper';
import { Divider } from '../ui/Divider';
import { CircularProgress } from '../ui/CircularProgress';
import { Button } from '../ui/Button';

export const DataTable: FC = () => {
  return (
    <Paper className={styles.dataTable}>
      <h2 className={styles.title}>Таблица с данными</h2>
      <input placeholder="Фильтр" />

      <div>
        <p>
          <b className={styles.highlight}>Состояние 1</b> - данные загружены
        </p>
        <Divider />
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
          <div className={styles.tableRow}>
            <span>Name</span>
            <span>Value</span>
          </div>
        </div>
        <Divider />
      </div>

      <div>
        <p>
          <b className={styles.highlight}>Состояние 2</b> - данные загружаются
        </p>
        <Divider />
        <div className={styles.table}>
          <div className={styles.progress}>
            <CircularProgress />
          </div>
        </div>
        <Divider />
      </div>

      <div>
        <p>
          <b className={styles.highlight}>Состояние 3</b> - ошибка при загрузке данных
        </p>
        <Divider />
        <div className={styles.table}>
          <span className={styles.error}>Текст ошибки</span>
        </div>
        <Divider />
      </div>

      <div>
        <p>
          <b className={styles.highlight}>Состояние 4</b> - совпадений по фильтру нет
        </p>
        <Divider />
        <div className={styles.table}>
          <div className={styles.noMatches}>Нет совпадений 🤔</div>
        </div>
        <Divider />
      </div>

      <Button>Загрузить новые данные</Button>
    </Paper>
  );
};
