import { useEffect, useState } from 'react';

import { ONE_MINUTE_IN_MILLISECONDS } from '@/constants.ts';
import { getCurrentTime } from '@/utils.ts';

export default function useTime() {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, ONE_MINUTE_IN_MILLISECONDS);

    return () => clearInterval(timer);
  }, []);

  return time;
}
