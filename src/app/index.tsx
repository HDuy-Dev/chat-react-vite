import { useEffect } from 'react';
import { env } from '@/config/env';
export const App = () => {
  useEffect(() => {
    fetch(`${env.API_URL}/healthcheck`).then((res) => console.log(res));
  }, []);
  return <h1 className="text-3xl font-bold underline">Test Husky!</h1>;
};
