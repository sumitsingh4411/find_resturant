import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../../redux/slices/authSlice';
import { URLPaths } from '../../constant';
import style from "./Header.module.scss";

function Header() {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(authActions.logout());
        navigate(URLPaths.LOGIN);
    }

    return (
        <div className={style.header}>
            <div className={style.header__left} onClick={() => {
                navigate(URLPaths.DASHBOARD);
            }}>
                Find Resturant
            </div>
            <div className={style.header__right}>
                {auth.username && <p onClick={logout}>Log Out</p>}
            </div>
        </div>
    )
}

export default Header