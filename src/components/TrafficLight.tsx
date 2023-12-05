import { useEffect, useState } from "react";
import SingleLight from "./SingleLight";

type SetLightsArg = "go" | "stop" | "slow" | "ready";

export const TrafficLight = () => {
  const [phase, setPhase] = useState<SetLightsArg>("go");

  const setLights = (ph: SetLightsArg, delay: number) => {
    setPhase(ph);
    setTimeout(() => {
      switch (ph) {
        case "go":
          setLights("slow", 1000);
          break;
        case "slow":
          setLights("stop", 3000);
          break;
        case "stop":
          setLights("ready", 1000);
          break;
        case "ready":
          setLights("go", 3000);
          break;
        default:
          break;
      }
    }, delay);
  };

  useEffect(() => {
    setLights("go", 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="traffic-light">
      <SingleLight type="red" phase={phase} />
      <SingleLight type="yellow" phase={phase} />
      <SingleLight type="green" phase={phase} />
    </div>
  );
};

export default TrafficLight;
