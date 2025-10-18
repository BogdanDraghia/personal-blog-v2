import style from './TagFilter.module.css';

const TagFilter = ({
  data,
  onChangeFilter,
  activeList,
}: {
  data: any;
  onChangeFilter: (name: string) => void;
  activeList: string[];
}) => {
  const name = data.attributes.categoryName as string;
  const isActive = activeList.includes(name);

  return (
    <button
      onClick={() => {
        onChangeFilter(data.attributes.categoryName);
      }}
      aria-pressed={isActive}
      className={style.tagBoxFilter}
      style={{
        backgroundColor: data.attributes.color || 'black',
        opacity: isActive ? 1 : 0.5,
      }}
    >
      {data.attributes.categoryName}
    </button>
  );
};

export default TagFilter;
