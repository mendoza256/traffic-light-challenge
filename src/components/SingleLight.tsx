interface SingleLightType {
  type: "red" | "yellow" | "green";
  phase: "go" | "stop" | "slow" | "ready";
}

export const SingleLight = ({ type, phase }: SingleLightType) => {
  let isActive;

  if (phase === "go" && type === "green") {
    isActive = true;
  } else if (phase === "stop" && type === "red") {
    isActive = true;
  } else if (phase === "slow" && type === "yellow") {
    isActive = true;
  } else if (phase === "ready" && (type === "red" || type === "yellow")) {
    isActive = true;
  }

  return <div className={`light ${type} ${isActive ? "active" : ""}`}></div>;
};

export default SingleLight;
