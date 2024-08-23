import { FC } from "react";
import { IChatItemList } from "./interface";
import "./chatItemList.scss";
import { Avatar } from "../Avatar";

export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
  const { id, title, textMessage, time, src, setChatId, chatId, setChatTitle } =
    props;

  const handleClick = () => {
    setChatId(id);
    setChatTitle(title);
  };

  const className = `component-chat-item-list component-chat-item-list--${
    chatId === id && "select"
  }`;

  return (
    <div className={className} onClick={handleClick}>
      <Avatar src={src} size="md" />
      <div className="data-chat-item-list">
        <div className="header-chat-item-list">
          <h4 className="title-chat-item-list">{title}</h4>
          <span className="time-chat-item-list">{time}</span>
        </div>
        <p className="message-chat-item-list">{textMessage}</p>
      </div>
    </div>
  );
};
