import { faker } from '@faker-js/faker';
import { IData } from './dto';
import { sleep } from '../utils';

let failCount = 0;

export const fetchData = async (): Promise<IData[]> => {
  await sleep(1000);

  /** каждый третий запрос будет с ошибкой */
  failCount++;
  if (!(failCount % 3)) {
    throw new Error('Что-то пошло не так...');
  }

  return Array.from({ length: 20 }, () => ({
    label: faker.lorem.word(),
    value: faker.datatype.number({ min: 0, max: 100 }),
  }));
};
