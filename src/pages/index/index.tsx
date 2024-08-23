import React, { FC, useEffect, useState } from "react";
import { IPage } from "../../interface/page";
import { ChatItemList } from "../../components/ChatItemList";
import { Message } from "../../components/Message";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SystemMessage } from "../../components/SystemMessage";
import { NewMessage } from "../../components/NewMessage";

import "./index.scss";
import { formatTimestampToTime } from "../../utils/timeFormatter";
import { formatTimestampToDate } from "../../utils/dateFormatter";
import { ErrorMessage } from "../../components/ErrorMessage";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { dataChatList, dataMessages, chatId, setChatId } = props;
  const [chatTitle, setChatTitle] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className="box-page-index">
      <div className="chats-page-index">
        <Header title="All Chats" />
        {dataChatList.map((chat) => (
          <ChatItemList
            id={chat.id}
            title={chat.title}
            textMessage={chat.last_message.message}
            time={formatTimestampToTime(chat.last_message.created_at)}
            src={chat.avatar}
            chatId={chatId}
            setChatId={setChatId}
            setChatTitle={setChatTitle}
          />
        ))}
      </div>
      {windowWidth < 700 ? (
        <ErrorMessage />
      ) : (
        <div className="messages-page-index">
          {chatTitle && <Header title={chatTitle} icon={true} />}
          {dataMessages.map((chat) => (
            <>
              {chat.is_new && <NewMessage />}
              <SystemMessage date={formatTimestampToDate(chat.created_at)} />
              <Message
                Main={!chat.user.you}
                My={chat.user.you}
                title={chat.user.name + " " + chat.user.surname}
                textMessage={chat.message}
                time={formatTimestampToTime(chat.created_at)}
                src={chat.user.avatar}
              />
            </>
          ))}
          {chatId && <Input attachHandler={() => {}} sentHandler={() => {}} />}
        </div>
      )}
    </div>
  );
};
