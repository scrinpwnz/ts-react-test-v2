import { FC } from 'react';
import cn from 'classnames';
import { Paper } from '../ui/Paper';
import styles from './Activator.module.css';
import { Button } from '../ui/Button';

export const Activator: FC = () => {
  return (
    <Paper className={styles.activator}>
      <div color={'secondary.main'}>
        <h2 className={styles.title}>Активатор</h2>
      </div>

      <div className={styles.conditions}>
        <div className={styles.condition}>
          <span>#1</span>
          <select>
            <option value={10}>Sample - 1</option>
            <option value={20}>Sample - 2</option>
            <option value={30}>Sample - 3</option>
          </select>
          <select>
            <option value={'>'}>{'>'}</option>
            <option value={'='}>{'='}</option>
            <option value={'<'}>{'<'}</option>
          </select>
          <input />
          <Button>X</Button>
        </div>
        <div className={styles.condition}>
          <span>#2</span>
          <select>
            <option value={10}>Sample - 1</option>
            <option value={20}>Sample - 2</option>
            <option value={30}>Sample - 3</option>
          </select>
          <select>
            <option value={'>'}>{'>'}</option>
            <option value={'='}>{'='}</option>
            <option value={'<'}>{'<'}</option>
          </select>
          <input />
          <Button>X</Button>
        </div>
      </div>

      <Button>Добавить условие</Button>

      <div className={styles.formula}>
        <span>Формула активации</span>
        <input placeholder="#1 AND #2" />
      </div>

      <div className={cn(styles.result, false && styles.resultGood, true && styles.resultBad)}>
        <span>
          {/*Условия выполнены*/}
          Условия не выполнены
        </span>
      </div>
    </Paper>
  );
};
