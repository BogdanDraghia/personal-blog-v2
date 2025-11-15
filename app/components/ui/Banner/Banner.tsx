import style from './Banner.module.css';

interface BannerProps {
  children: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return <div className={style.banner}>{children}</div>;
}
