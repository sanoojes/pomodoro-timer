import { useContext } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { TimerContext } from "@/context/TimerContext";
import CountdownTimer from "./countdownTimer";

const Timer = () => {
  const { isStarted, setIsStarted } = useContext(TimerContext);

  const toggleTimer = () => {
    setIsStarted((prev) => !prev);
  };

  return (
    <Card className='flex-col items-center space-y-4'>
      <CountdownTimer />
      <Card className='w-full'>
        <Button
          className='text-xl uppercase font-bold px-6 py-4'
          variant={"secondary"}
          onClick={() => {
            toggleTimer();
          }}
        >
          {isStarted ? "Stop" : "Start"}
        </Button>
      </Card>
    </Card>
  );
};

export default Timer;
