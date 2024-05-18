import { MODE } from "@/constants/enum";
import { TimerContextProps } from "@/types/types";
import { createContext } from "react";

const TimerContext = createContext<TimerContextProps>({
  isStarted: false,
  setIsStarted: () => {},
  timerText: {
    pomodoro: "25:00",
    lbreak: "15:00",
    sbreak: "5:00",
  },
  setTimerText: () => {},
  mode: MODE.POMO,
  setMode: () => {},
});

export { TimerContext };
