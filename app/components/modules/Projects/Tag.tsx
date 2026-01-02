import style from './Tag.module.css';

export interface TagProps {
  name: string;
  color: string;
}

const Tag = ({ name, color }: TagProps) => {
  return (
    <div style={{ backgroundColor: color }} className={style.tag}>
      <p
        //dynamic color text based on background color, thanks to https://miunau.com/posts/dynamic-text-contrast-in-css/
        style={{
          color: color,
          mixBlendMode: 'luminosity',
          filter: 'invert(1) grayscale(1) brightness(1.3) contrast(9000)',
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default Tag;
