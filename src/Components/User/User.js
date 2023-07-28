import React from "react";
import style from "./user.module.scss";

export const User = ({ id, login, url }) => {

  return (

      <div className={style.itemData}>
          <div>{id}</div>
          <div>{login}</div>
          <div>{url}</div>
      </div>

  );
}
