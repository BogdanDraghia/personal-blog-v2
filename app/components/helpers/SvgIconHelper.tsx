import { m } from 'framer-motion';

const SvgIconHelper = ({
  name,
  icon,
  pass,
}: {
  name: string;
  icon: React.ReactNode;
  pass: string;
}) => {
  return (
    <m.a whileHover={{ scale: 1.1 }} target="_blank" href={pass}>
      {icon}
    </m.a>
  );
};

export default SvgIconHelper;
