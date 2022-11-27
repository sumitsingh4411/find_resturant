import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../common/component/sidebar/SideBar';
import { CONSTANT_DATA, MAP_DATA } from '../../common/constant';
import { mapDataActions } from '../../redux/slices/mapDataSlice';
import style from "./BookMark.module.scss";

function BookMark() {
    const dispatch = useDispatch();
    const { bookmark } = useSelector(state => state.mapData);

    useEffect(() => {
        if (bookmark?.length === 0) {
            const data = JSON.parse(localStorage.getItem(CONSTANT_DATA.BOOKMARK));
            if (data?.length > 0) {
                dispatch(mapDataActions.addBookmark(data));
            }
        }
    }, [])

    return (
        <div className={style.bookmark}>
            <div className={style.bookmark__left}>
                <SideBar />
            </div>
            <div className={style.bookmark__right}>
                <h1>BookMarked Resturant List</h1>
                {
                    bookmark?.map((item, index) => (
                        <div className={style.bookmark__right__item} key={item.id}>
                            <iframe
                                onClick={() => {
                                    window.open(`${MAP_DATA}?params={'ds2.name2':'${item.name}'}`, "_blank");
                                }}
                                title={'hello' + index} src={`${MAP_DATA}?config={'ds2.name2':'${item.name}'}`}
                                width="100%" height="100px"
                                style={{ border: 0, cursor: 'pointer' }}></iframe>
                            <div className={style.bookmark__right__item__name}>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BookMark