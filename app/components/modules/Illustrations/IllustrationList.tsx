import type { IllustrationData } from '~/routes/illustrations';
import IllustrationItem from './IllustrationItem';
import style from './IllustrationList.module.css';
interface IllustrationListProps {
  illustrations: IllustrationData[];
  onItemClick: (id: string) => void;
}
const IllustrationList = ({ illustrations, onItemClick }: IllustrationListProps) => {
  return (
    <div className={style.illustrationList}>
      {illustrations.map((illustration) => (
        <IllustrationItem
          {...illustration}
          key={illustration.id}
          onClick={() => onItemClick(illustration.id)}
        />
      ))}
    </div>
  );
};

export default IllustrationList;
