import { useContext } from 'react';
import { ApiContext } from '../context/ApiProvider';

export default function useApi() {
  const context = useContext(ApiContext);

  return context;
}