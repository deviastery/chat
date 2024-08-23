import { FC } from "react";
import { IHeader } from "./interface";
import "./header.scss";
import MessageIcon from "../../assets/icons/message.png";

export const Header: FC<IHeader> = (props: IHeader) => {
  const { title, icon } = props;

  return (
    <div className="box-header">
      {icon && <img src={MessageIcon} className="icon-header" />}
      <h1 className="title-header">{title}</h1>
    </div>
  );
};
