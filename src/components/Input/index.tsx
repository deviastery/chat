import { FC } from "react";
import { IInput } from "./interface";
import "./input.scss";
import AttachIcon from "../../assets/icons/attach.png";
import SentIcon from "../../assets/icons/sent.png";

export const Input: FC<IInput> = (props: IInput) => {
  const { sentHandler, attachHandler } = props;

  return (
    <div className="box-input">
      <div className="input-input">Type message</div>
      <div className="button-box-input">
        <button onClick={attachHandler} className="button-input">
          <img src={AttachIcon} className="icon-input" />
        </button>
        <button onClick={sentHandler} className="button-input">
          <img src={SentIcon} className="icon-input" />
        </button>
      </div>
    </div>
  );
};
