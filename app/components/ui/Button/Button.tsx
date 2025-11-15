import { m } from 'framer-motion';
import style from './Button.module.css';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  colortxt: string;
  hover?: boolean;
  fill?: string;
  styles?: React.CSSProperties;
}

const Button = ({ text, fill, colortxt, hover = true, styles }: ButtonProps) => {
  return (
    <m.button
      whileTap={hover ? { scale: 1 } : ''}
      whileHover={hover ? { scale: 1.05 } : ''}
      className={style.button}
      style={{ ...styles, backgroundColor: fill, color: colortxt }}
    >
      {text}
    </m.button>
  );
};

export default Button;
