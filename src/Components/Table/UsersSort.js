import React from "react";
import style from "./users.module.scss";
import arrow from "../../assets/icons/arrow.png";
import {sortCurrentUsersById} from "../../redux/reducers/dataReducer";
import {useDispatch} from "react-redux";

export const UsersSort = () => {

    const dispatch = useDispatch()

    const sort = () => dispatch(sortCurrentUsersById())

    return (
        <>
        {
            <div className={style.itemData}>
                <div onClick={sort}>ID <img src={arrow} width='12' height='7' alt="arrow" /></div>
                <div onClick={sort}>Login <img src={arrow} width='12' height='7' alt="arrow" /></div>
                <div onClick={sort}>Url <img src={arrow} width='12' height='7' alt="arrow" /></div>
            </div>
        }
        </>
    )



}
