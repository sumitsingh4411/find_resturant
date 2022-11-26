import React from 'react';
import SideBar from '../../common/component/sidebar/SideBar';
import style from "./BookMark.module.scss";

function BookMark() {
    return (
        <div className={style.bookmark}>
            <div className={style.bookmark__left}>
                <SideBar />
            </div>
            <div className={style.bookmark__right}>
            </div>
        </div>
    )
}

export default BookMark