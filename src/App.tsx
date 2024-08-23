import React, { useEffect, useState } from "react";
import { PageIndex } from "./pages/index";
import { getChatList, getMessages } from "./api/chat";
import { IChatListItem, IMessageListItem } from "./api/chat/interface";

function App() {
  const [dataChatList, setDataChatList] = useState<IChatListItem[]>([]);
  const [dataMessages, setDataMessages] = useState<IMessageListItem[]>([]);
  const [chatId, setChatId] = useState("");

  useEffect(() => {
    getChatList()
      .then((data) => {
        setDataChatList(
          data.response.map(
            ({ id, title, last_message: { message, created_at }, avatar }) => ({
              id,
              title,
              last_message: { message, created_at },
              avatar,
            })
          )
        );
      })
      .catch((error) => {
        console.error("Ошибка получения данных:", error);
      });
  }, []);

  useEffect(() => {
    getMessages({
      chat_id: chatId,
    })
      .then((data) => {
        setDataMessages(
          data.response.map(
            ({
              created_at,
              user: { name, surname, avatar, you },
              is_new,
              message,
            }) => ({
              created_at,
              user: {
                name,
                surname,
                avatar,
                you,
              },
              is_new,
              message,
            })
          )
        );
      })
      .catch((error) => {
        console.error("Ошибка получения данных:", error);
      });
  }, [chatId]);

  return (
    <div className="App">
      <PageIndex
        dataChatList={dataChatList}
        dataMessages={dataMessages}
        chatId={chatId}
        setChatId={setChatId}
      />
    </div>
  );
}

export default App;
