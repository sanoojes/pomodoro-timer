import { useState } from "react";
import { TimerContext } from "./TimerContext";
import { MODE } from "@/constants/enum";
import { ModeTimesProps } from "@/types/types";

const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [timerText, setTimerText] = useState<ModeTimesProps>({
    pomodoro: "25:00",
    lbreak: "15:00",
    sbreak: "5:00",
  });
  const [mode, setMode] = useState(MODE.POMO);

  const value = {
    isStarted,
    setIsStarted,
    timerText,
    setTimerText,
    mode,
    setMode,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
