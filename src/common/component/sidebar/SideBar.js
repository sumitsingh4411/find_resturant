import React from 'react'
import { useNavigate } from 'react-router-dom';
import { URLPaths } from '../../constant';
import style from "./SideBar.module.scss";

function SideBar() {
  const router = window.location.pathname;
  const navigte = useNavigate()

  return (
    <div className={style.sidebar}>
      <div
        onClick={() => {
          navigte(URLPaths.DASHBOARD)
        }}
        className={`${style.sidebar__item} 
      ${URLPaths.DASHBOARD === router ? style.active_link : ""}`}>
        HomePage
      </div>
      <div
        onClick={() => {
          navigte(URLPaths.BOOKMARK)
        }}
        className={`${style.sidebar__item}  
      ${URLPaths.BOOKMARK === router ? style.active_link : ""}`}
      >
        BookMarks
      </div>
    </div>
  )
}

export default SideBar