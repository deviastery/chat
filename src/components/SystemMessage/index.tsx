import { FC } from "react";
import { ISystemMessage } from "./interface";
import "./systemMessage.scss";

export const SystemMessage: FC<ISystemMessage> = (props: ISystemMessage) => {
  const { date } = props;

  return (
    <div className="box-system-message">
      <span className="time-system-message">{date}</span>
    </div>
  );
};
