import React from "react";
import {User} from "../User/User";
import {PopupWrapper} from "./Popup";

export const Users = ({ data }) => {
    return (
        <>
        {
            data?.map(({id, login, url, html_url, followers_url, following_url}, i) =>

                <PopupWrapper id={id} html_url={html_url} followers_url={followers_url} following_url={following_url}>
                    <User key={i} id={id} login={login} url={url} />
                </PopupWrapper>
            )
        }
        </>
    )
}
