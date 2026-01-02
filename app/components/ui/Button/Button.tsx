import style from './Button.module.css';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

// <Button text={'hello'} href="https://google.com" target="_blank" />
// <Button text={'hello'} variant={'outline'} href="https://google.com" target="_blank" />
// <Button text={'hello'} variant={'secondary'} href="https://google.com" target="_blank" />

interface ButtonProps
  extends Partial<
    ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>
  > {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  hover?: boolean;
}

const Button = ({
  text,
  variant = 'primary',
  hover = true,
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component href={href} className={`${style.button} ${style[variant]} ${className}`} {...props}>
      {text}
    </Component>
  );
};

export default Button;
