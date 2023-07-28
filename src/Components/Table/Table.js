import React from "react";
import {Users} from "./Users";
import {UsersSort} from "./UsersSort";
import style from "./users.module.scss";
import {useSelector} from "react-redux";

export const Table = () => {

    const { loading, currentUsers } = useSelector(state => state.data)

    if (!loading) {
        return (<div className={style.container}><p className={style.loading}>Loading...</p></div>);
    }

  return (
      <div className={style.container}>

        <UsersSort />
        <Users data={currentUsers} />

      </div>
  );
}
