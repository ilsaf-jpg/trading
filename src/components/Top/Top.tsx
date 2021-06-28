import React from "react"
import s from "./Top.module.css"
import { NavLink } from "react-router-dom"
export const Top: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item + " " + s.logo}>
        <picture>
          <source srcSet={"./img/logo_mobile.png"} media="(max-width:575px)" />
          <img src={"./img/logo.png"} alt={"logo"} style={{ height: 35 }} />
        </picture>
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
      <div className={s.search + " " + s.item}>
        <div>
          <input className={s.input} />
        </div>

        <div>
          <button className={s.button}>Search!</button>
        </div>
      </div>
    </div>
  )
}
