import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";
import { IChatListItemResponse, IMessageListItemResponse } from "./interface";

export const getChatList = (): Promise<IChatListItemResponse> => {
  return wrapper("get", URLS.LIST);
};

export const getMessages = (req: {
  chat_id: string;
}): Promise<IMessageListItemResponse> => {
  return wrapper("get", URLS.MESSAGES, req);
};
