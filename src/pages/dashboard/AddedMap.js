import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CONSTANT_DATA, MAP_DATA } from '../../common/constant';
import { mapDataActions } from '../../redux/slices/mapDataSlice';
import style from "./Dashboard.module.scss";

function AddedMap() {
    const dispatch = useDispatch();
    const { mapData, bookmark } = useSelector(state => state.mapData);

    useEffect(() => {
        if (mapData?.length === 0) {
            const data = JSON.parse(localStorage.getItem(CONSTANT_DATA.MAP_DATA));
            if (data?.length > 0) {
                dispatch(mapDataActions.setMapData(data));
            }
        }
    }, [])

    const bookMark = (data) => {
        let tempData = [...bookmark, data];
        dispatch(mapDataActions.addBookmark(tempData));
        localStorage.setItem(CONSTANT_DATA.BOOKMARK, JSON.stringify(tempData));
        toast.success("Bookmarked Successfully");

    }
    const removeItem = (data) => {
        let tempData = mapData.filter(item => data !== item.id);
        dispatch(mapDataActions.setMapData(tempData));
        localStorage.setItem(CONSTANT_DATA.MAP_DATA, JSON.stringify(tempData));
        toast.success("Removed Successfully");
    }

    return (
        <div className={style.dashboard__right__header__search__result__map}>
            {mapData?.map((item, index) => (
                <div className={style.dashboard__right__header__search__result__map__item} key={item.id}>
                    <iframe
                        onClick={() => {
                            window.open(`${MAP_DATA}?params={'ds2.name2':'${item.name}'}`, "_blank");
                        }}
                        title={'hello' + index} src={`${MAP_DATA}?config={'ds2.name2':'${item.name}'}`}
                        width="100%" height="100px"
                        style={{ border: 0, cursor: 'pointer' }}   ></iframe>
                    <div className={style.dashboard__right__header__search__result__map__item__name}>{item.name}</div>
                    <div className={style.dashboard__right__header__search__result__map__item__address}>
                        <button
                            onClick={() => {
                                bookMark(item);
                            }}
                            className={style.dashboard__right__header__search__result__map__item__address__button}>
                            Bookmark</button>
                        <button className={style.dashboard__right__header__search__result__map__item__address__button}
                            onClick={() => {
                                removeItem(item.id);
                            }}
                        >Remove</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddedMap