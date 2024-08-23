import { FC } from "react";
import { IMessage } from "./interface";
import "./message.scss";
import { Avatar } from "../Avatar";
import { Time } from "../Time";

export const Message: FC<IMessage> = (props: IMessage) => {
  const { title, textMessage, time, src, My, Main } = props;

  const classNameBoxMessage = `box-message-message box-message-message--${
    My && "my"
  }`;
  const classNameComponent = `component-message component-message--${
    My && "my"
  }`;

  return (
    <div className={classNameComponent}>
      {Main && <Avatar src={src} size="sm" />}
      <div>
        {Main && <h4 className="title-message">{title}</h4>}
        <div className={classNameBoxMessage}>
          <p className="message-message">{textMessage}</p>
          <div className="time-box-message">
            <Time My={My} time={time} />
          </div>
        </div>
      </div>
    </div>
  );
};
