import React from "react"
import s from "./Top.module.css"
import { NavLink } from "react-router-dom"
export const Top: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <img src="src\components\Charts\img\icon.png"></img>
      </div>
      
      <div className={s.item}>
        <NavLink to="/main" className={s.item}>
          Main page
        </NavLink>
      </div>


      <div className={s.item}>
        <NavLink to="/profile" className={s.item}>
          Profile
        </NavLink>
      </div>

      
      <div className={s.item}>
        <NavLink to="/info" className={s.item}>
          Info
        </NavLink>
      </div>
      <div className={s.search}>
        <div  >
          <input className={s.input} />
        </div>

        <div  >
          <button className={s.button}>Поиск!</button>
        </div>
      </div>
    </div>
  )
}
