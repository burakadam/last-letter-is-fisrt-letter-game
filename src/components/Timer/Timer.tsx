import { useEffect, useState } from 'react';

import { USER_MAX_ANSWER_TIME } from '@/constants/time';
import { ITimer } from '.';

const Timer = (props: ITimer) => {
  const [seconds, setSeconds] = useState(USER_MAX_ANSWER_TIME);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        props.onTimeUp();
      }
    }, 1000);

    return () => clearInterval(myInterval);
  });

  return <div>{seconds}</div>;
};

export { Timer };
