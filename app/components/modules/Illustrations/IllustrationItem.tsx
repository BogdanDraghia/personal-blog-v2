import type { IllustrationData } from '~/routes/illustrations';
import style from './IllustrationItem.module.css';

interface IllustrationItemProps extends IllustrationData {
  onClick: () => void;
}

const IllustrationItem = ({ title, variations, onClick }: IllustrationItemProps) => {
  return (
    <div className={style.illustrationItem} onClick={onClick}>
      <div className={style.dotsOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={variations.large} alt={title} loading="lazy" />
    </div>
  );
};

export default IllustrationItem;
