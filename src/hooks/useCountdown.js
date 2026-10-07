import { useEffect, useState } from "react";

const zeroTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function useCountdown(targetDate) {
  const [time, setTime] = useState(zeroTime);

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return zeroTime;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const initial = setTimeout(() => setTime(calculate()), 0);
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, [targetDate]);

  return time;
}
