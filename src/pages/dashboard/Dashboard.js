import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideBar from '../../common/component/sidebar/SideBar';
import { getAuthConfig } from '../../common/helper';
import style from "./Dashboard.module.scss";
import { DebounceInput } from 'react-debounce-input';

function Dashboard() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            var config = {
                method: 'get',
                url: 'https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={\'ds2.name2\':\'Subway\'}',
                headers: {
                    'Cookie': 'NID=511=r2vEY-3dpWZXQFmTLVNowXTUISNz4xKhLMKzy83dcixp8d2K_eOdaxeFFFARu7_e2-DtEN99nshsWcUjLwz6P6wrja3lh6P0fa5l5vx_G89HdnOpW6CPPMyY700p5vNGeBMbwFU8eajvdh8082Q1aQ1F_otWYxFUp-cgcURljhk'
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        })()
    }, []);

    const onChangeText = (e) => {
        setSearch(e.target.value);
        let value = e.target.value?.toLowerCase();
        (async () => {
            const res = await axios.get(`https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?filterByFormula=SEARCH('${value}',LOWER(Name))`, getAuthConfig());
            setData(res.data.records);
            console.log(res.data);
        })();
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
                            debounceTimeout={500}
                            type="text"
                            placeholder="Search your restaurant"
                            value={search}
                            onChange={onChangeText}
                            className={style.dashboard__right__header__search}
                        />
                        <div className={style.dashboard__right__header__search__result}>
                            {
                                data.map((item) => (
                                    <div className={style.dashboard__right__header__search__result__item__name}>
                                        {item.fields.Name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className={style.dashboard__right__header__button}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard