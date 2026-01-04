import styles from './ColorPalette.module.css';

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette = ({ colors }: ColorPaletteProps) => {
  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };
  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <div key={color} className={styles.paletteBox} onClick={() => copyColor(color)}>
          <div className={styles.colorBox} style={{ backgroundColor: color }} />
          <span className={styles.colorCode}>{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
