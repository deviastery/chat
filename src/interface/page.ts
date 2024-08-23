import { IChatListItem, IMessageListItem } from "../api/chat/interface";

export interface IPage {
  dataChatList: IChatListItem[];
  dataMessages: IMessageListItem[];
  title?: string;
  chatId: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
}
