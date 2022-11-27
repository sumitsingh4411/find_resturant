import axios from 'axios';
import React, { useState } from 'react';
import SideBar from '../../common/component/sidebar/SideBar';
import { getAuthConfig, randomNumber } from '../../common/helper';
import style from "./Dashboard.module.scss";
import { DebounceInput } from 'react-debounce-input';
import { AIRTABLE_RESTURANT_URL } from '../../common/constant';
import AddedMap from './AddedMap';
import { useDispatch, useSelector } from 'react-redux';
import { mapDataActions } from '../../redux/slices/mapDataSlice';
import { toast } from 'react-toastify';

function Dashboard() {
    const dispatch = useDispatch();
    const { mapData } = useSelector(state => state.mapData);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const onChangeText = (e) => {
        setSearch(e.target.value);
        let value = e.target.value?.toLowerCase();
        (async () => {
            const res = await axios.get(`${AIRTABLE_RESTURANT_URL}?filterByFormula=SEARCH('${value}',LOWER(Name))`,
                getAuthConfig());
            setData(res.data.records);
        })();
    }

    const setMapData = () => {
        let tempData = [...mapData, {
            id: randomNumber(),
            name: search,
        }];
        dispatch(mapDataActions.setMapData(tempData));
        setData([]);
        setSearch("");
        localStorage.setItem("mapData", JSON.stringify(tempData));
        toast.success("Resturant Added Successfully");
    }

    return (
        <div className={style.dashboard}>
            <div className={style.dashboard__left}>
                <SideBar />
            </div>
            <div className={style.dashboard__right}>
                <div className={style.dashboard__right__header}>
                    <div className={style.dashboard__right__header__search__list}>
                        <DebounceInput
                            debounceTimeout={300}
                            type="text"
                            placeholder="Search your restaurant"
                            value={search}
                            onChange={onChangeText}
                            className={style.dashboard__right__header__search}
                        />
                        <div className={style.dashboard__right__header__search__result}>
                            {
                                data.map((item) => (
                                    <div className={style.dashboard__right__header__search__result__item__name}
                                        onClick={() => {
                                            setSearch(item.fields.Name);
                                            setData([]);
                                        }}>
                                        {item.fields.Name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button
                        onClick={setMapData}
                        className={style.dashboard__right__header__button}
                    >Add</button>
                </div>
                <div className={style.dashboard__right__body}>
                    <AddedMap />
                </div>
            </div>
        </div>
    )
}

export default Dashboard