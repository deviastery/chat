import { FC } from "react";
import { ITime } from "./interface";
import "./time.scss";
import ReadIcon from "../../assets/icons/read-message.png";

export const Time: FC<ITime> = (props: ITime) => {
  const { My, time } = props;

  return (
    <div className="box-time">
      <span className="time-time">{time}</span>
      {My && <img src={ReadIcon} className="icon-time" />}
    </div>
  );
};
