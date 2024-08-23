export interface IChatListItem {
  id: string;
  title: string;
  last_message: {
    message: string;
    created_at: string;
  };
  avatar: string;
}

export interface IChatListItemResponse {
  response: IChatListItem[];
}

export interface IMessageListItem {
  created_at: string;
  user: {
    name: string;
    surname: string;
    avatar: string;
    you: boolean;
  };
  is_new: string;
  message: string;
}

export interface IMessageListItemResponse {
  response: IMessageListItem[];
}
