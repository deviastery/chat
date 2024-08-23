export interface IChatItemList {
  id: string;
  title: string;
  textMessage: string;
  time: string;
  src?: string;
  chatId: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
  setChatTitle: React.Dispatch<React.SetStateAction<string>>;
}
