import React from 'react';
import styles from './App.module.css';
import { Paper } from './components/ui/Paper';
import { Divider } from './components/ui/Divider';
import { DataTable } from './components/DataTable';
import { Activator } from './components/Activator';

export const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Paper className={styles.description}>
          <div className={styles.taskContainer}>
            <h2>Постановка</h2>
          </div>
          <Divider />
          <div className={styles.taskContainer}>
            <b>Таблица с данными</b> (<span className={styles.highlight}>src/components/DataTable/DataTable.tsx</span>)
            <ol>
              <li>
                <span>
                  Реализовать получение данных с помощью функции <code>fetchData</code> (
                  <span className={styles.highlight}>src/global/api/fetchData.ts</span>):
                </span>
                <ul>
                  <li>Данные должны быть получены при первой загрузке компонента</li>
                  <li>Должна быть возможность получить новые данные по нажатию на кнопку</li>
                  <li>Во время загрузки данных кнопка должна отключаться</li>
                </ul>
              </li>
              <li>
                Реализовать 3 состояния таблицы (все кроме фильтрации), которые показаны в компоненте. Ошибка будет на
                каждое третье получение данных, это уже реализовано в функции <code>fetchData</code>
              </li>
              <li>Реализовать логику фильтрации элементов таблицы</li>
            </ol>
          </div>
          <Divider />
          <div className={styles.taskContainer}>
            <b>Активатор</b> (<span className={styles.highlight}>src/components/Activator/Activator.tsx</span>)
            <ol>
              <li>Сделать так, чтобы данные из таблицы были опциями в селекте условия</li>
              <li>Реализовать логику добавления и удаления условий</li>
              <li>
                Сделать так, чтобы надпись <span className={styles.highlight}>«Условия выполнены»</span> отображалась
                когда все добавленные условия истинны. Надпись{' '}
                <span className={styles.highlight}>«Условия не выполнены»</span> должна отображаться если хотя бы одно
                условие ложное
              </li>
              <li>
                Реализовать логику для формулы активации. В инпут вводится формула типа{' '}
                <span className={styles.highlight}>#1 AND #2</span>, которая говорит о том, что активатор сработает если
                условия <span className={styles.highlight}>#1</span> и <span className={styles.highlight}>#2</span>{' '}
                истинны
              </li>
              <li>Добавить возможность использовать скобки в формуле</li>
            </ol>
          </div>
          <Divider />
        </Paper>
        <div className={styles.task}>
          <DataTable />
          <Activator />
        </div>
      </div>
    </div>
  );
};

export default App;
