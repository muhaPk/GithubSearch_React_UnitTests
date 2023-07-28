import React from "react";
import {User} from "../User/User";
import style from "./users.module.scss";
import Popup from 'reactjs-popup';

export const Users = ({ data }) => {
    return (
        <>
        {
            data?.map(({id, login, url, html_url, followers_url, following_url}, i) =>

                <Popup key={i} trigger={<div><User key={i} id={id} login={login} url={url} /></div>} position="left center">
                    <div className={style.popUp}>
                        <div>{id}</div>
                        <div>{login}</div>
                        <div>{url}</div>
                        <div>{html_url}</div>
                        <div>{followers_url}</div>
                        <div>{following_url}</div>
                    </div>
                </Popup>
            )
        }
        </>
    )
}
