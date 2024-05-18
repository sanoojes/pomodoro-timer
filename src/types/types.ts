import { MODE } from "@/constants/enum";
import { Dispatch, SetStateAction } from "react";

export interface ModeTimesProps {
  pomodoro: string;
  sbreak: string;
  lbreak: string;
}

export interface CountdownTimerProps {
  callbackFn?: () => void;
  mode?: ModeTimesProps;
}

export interface TimerContextProps {
  isStarted: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  mode: number;
  setMode: Dispatch<SetStateAction<MODE>>;
  timerText: ModeTimesProps;
  setTimerText: Dispatch<SetStateAction<ModeTimesProps>>;
}
