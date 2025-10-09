import { m } from "framer-motion";
import style from "./button.module.css";

const Button = ({ text, fill, colortxt, hover = true, styles }: {
    text: string;
    colortxt: string;
    hover?: boolean;
    fill?: string;
    styles?: React.CSSProperties;
}) => {
  return (
    <m.div
      whileTap={hover ? { scale: 0.99 } : ""}
      whileHover={hover ? { scale: 1.05 } : ""}
      className={style.button}
      style={{ ...styles, backgroundColor: fill, color: colortxt }}
    >
      {text}
    </m.div>
  );
};

export default Button;
