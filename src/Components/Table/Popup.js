import React from "react";
import style from "./users.module.scss";
import Popup from 'reactjs-popup';

export const PopupWrapper = ({ id, followers_url, following_url, children }) => {
    return (
        <>
        {
            <Popup trigger={<div>{children}</div>} position="left center">
                <div className={style.popUp}>
                    <div>id: {id}</div>
                    <div>followers_url: {followers_url}</div>
                    <div>following_url: {following_url}</div>
                </div>
            </Popup>
        }
        </>
    )
}
