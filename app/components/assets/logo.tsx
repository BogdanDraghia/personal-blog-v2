import * as React from "react";
import style from "./assets.module.css";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/" className={style.LogoContainer}>
      <div className={style.LogoIcon}>
        <div className={`${style.LogoCircle}  ${style.LightLogo}`}></div>
      </div>
      <div className={style.LogoText}>Bogdan</div>
    </Link>
  );
};

export default Logo;
