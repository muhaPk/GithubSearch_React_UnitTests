import React from "react";
import style from "./search.module.scss";
import {useDispatch} from "react-redux";
import {getPosts} from "../../redux/actions/data";

export const Search = () => {

    const dispatch = useDispatch()

    const handleSearch = value => {
        value && dispatch(getPosts(value))
    };

  return (
    <div>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Поиск"
        className={style.search}
        type="input"
        autoFocus
      />
    </div>
  );
}
