/// <reference types="react-scripts" />
import { FC, PropsWithChildren } from 'react';

declare global {
  type FCWithChildren<T = unknown> = FC<PropsWithChildren<T>>;
}
