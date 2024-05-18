import { MODE } from "@/constants/enum";
import { TimerContext } from "@/context/TimerContext";
import { CountdownTimerProps } from "@/types/types";
import { useContext, useEffect, useRef, useState } from "react";

const CountdownTimer = ({ callbackFn }: CountdownTimerProps) => {
  const { mode, timerText, isStarted } = useContext(TimerContext);
  const intervalRef = useRef<unknown>();
  const currDate = useRef(Date.now());
  const [currText, setCurrText] = useState("00:00");

  const handleSetCurrText = () => {
    if (mode === MODE.POMO) setCurrText(timerText.pomodoro);
    else if (mode === MODE.SHORTBREAK) setCurrText(timerText.sbreak);
    else setCurrText(timerText.lbreak);
  };

  useEffect(() => handleSetCurrText(), [mode]);

  useEffect(() => {
    function startTimer(duration: number) {
      currDate.current = Date.now();

      let diff: number, minutes, seconds;

      function timer() {
        diff = duration - (((Date.now() - currDate.current) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = diff % 60 | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setCurrText(`${minutes}:${seconds}`);
        if (diff <= 0) {
          callbackFn?.();
          clearInterval(Number(intervalRef.current));
        }
      }

      intervalRef.current = setInterval(timer, 1000);
    }

    function textToSeconds(text: string) {
      const [minutes, seconds] = text.split(":").map(Number);
      return minutes * 60 + seconds;
    }

    if (isStarted) {
      if (!intervalRef.current) {
        // Start the interval only if it's not already running
        const duration = textToSeconds(currText);
        startTimer(duration);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(Number(intervalRef.current));
        intervalRef.current = null;
      }
    }
  }, [isStarted]);

  return <p className='text-9xl font-bold'>{currText}</p>;
};

export default CountdownTimer;
