import { m } from 'framer-motion';

interface SvgIconProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const SvgIcon = ({ name, icon, link }: SvgIconProps) => {
  return (
    <m.a whileHover={{ scale: 1.1 }} target="_blank" href={link}>
      {icon}
    </m.a>
  );
};

export default SvgIcon;
