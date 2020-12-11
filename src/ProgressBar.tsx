import { Slider, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";

interface ProgressBarProps {
  setCurrentTime: (value: number) => void;
  currentTime: number;
  duration: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  console.log("props", props);
  const { setCurrentTime, currentTime, duration } = props;
  const [position, setPosition] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const updatePosition = () => {
    if (!isSeeking && currentTime) {
      setPosition(currentTime);
    }
  };

  setTimeout(updatePosition, 300);

  const onSeeking = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    console.log("onSeeking");
    setIsSeeking(true);
    setPosition(value as number);
  };

  const onSeekCommitted = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setPosition(value as number);

    setIsSeeking(false);
    if (currentTime) {
      setCurrentTime(position);
    }
  };

  const getFormattedTime = (value: number) => {
    if (isNaN(value)) {
      return "00:00";
    }

    const time = moment.duration(value, "seconds").as("millisecond");
    const formatted = moment.utc(time).format("mm:ss");
    return formatted;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        margin: "0px 8px",
      }}
    >
      <Typography style={{ padding: "8px" }} variant="caption">
        {getFormattedTime(position)}
      </Typography>
      <Slider
        min={0}
        max={duration}
        value={position}
        onChange={onSeeking}
        onChangeCommitted={onSeekCommitted}
      />
      <Typography style={{ padding: "8px" }} variant="caption">
        {getFormattedTime(duration)}
      </Typography>
    </div>
  );
};
