import { createContext } from 'react';

interface DataModel {
  title?: string;
}

export const DataContext = createContext<DataModel>({});