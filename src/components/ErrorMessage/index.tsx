import { FC } from "react";
import "./errorMessage.scss";

export const ErrorMessage: FC = () => {
  return (
    <div className="box-error-message">
      <span className="message-error-message">
        ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
      </span>
    </div>
  );
};
