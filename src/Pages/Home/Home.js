import React from 'react';
import {Table} from '../../Components/Table/Table'
import {Pagination} from "../../Components/Pagination/Pagination";
import {Search} from "../../Components/Search/Search";
import style from "./home.module.scss"

export const Home = () => {

    return (
        <div className={style.container}>
            <Search />
            <Table />
            <Pagination />
        </div>

    );
}
