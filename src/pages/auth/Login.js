import React, { useState } from 'react';
import style from "./Login.module.scss";
import CustomInput from '../../common/component/customInput/CustomInput';
import { CheckUser, getAuthConfig, validate } from '../../common/helper';
import axios from 'axios';
import { AIRTABLE_URL, INITIAL_STATE } from '../../common/constant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        loading: false,
        error: "",
    });
    const [userName, setUserName] = useState(INITIAL_STATE);
    const [password, setPassword] = useState(INITIAL_STATE);


    const setChangeData = (e) => {
        const { value, name } = e.target;
        if (name === "userName") {
            setUserName({
                value,
                error: ""
            })
        }
        else if (name === "password") {
            setPassword({
                value,
                error: ""
            })
        }
    }
    const checkUser = async (e) => {
        e.preventDefault();
        if (validate(userName, password, setUserName, setPassword)) {
            setLoginData({
                loading: true,
                error: ""
            });
            try {
                const users_data = await axios.get(AIRTABLE_URL.TABLE_DATA, getAuthConfig());
                if (CheckUser(users_data?.data?.records, userName.value, password.value, dispatch)) {
                    setLoginData({
                        loading: false,
                        error: ""
                    });
                    navigator("/dashboard");
                } else {
                    setLoginData({
                        loading: false,
                        error: "Invalid Credentials"
                    });
                }
            } catch (err) {
                setLoginData({
                    loading: false,
                    error: "Something went wrong"
                });
            }
        }
        return;
    }

    return (
        <div className={style.login}>
            <div className={style.login__container}>
                <form className={style.login__form} onSubmit={checkUser}>
                    <h1>Login</h1>
                    <CustomInput
                        label="UserName"
                        value={userName.value}
                        error={userName.error}
                        placeholder="userName"
                        onChange={setChangeData}
                        name="userName"
                        type={"text"} />

                    <CustomInput
                        label="Password"
                        value={password.value}
                        error={password.error}
                        placeholder="Password"
                        onChange={setChangeData}
                        name="password"
                        type={"password"} />
                    <button className={style.login__button} type="submit">
                        {
                            loginData.loading ? "Login..." : "Login"
                        }
                    </button>
                    {
                        loginData.error &&
                        <div className={style.login__error}>
                            {loginData.error}</div>
                    }
                </form>
            </div>
        </div>
    )
}
