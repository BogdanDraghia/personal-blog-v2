import style from './Tag.module.css';

export default function Tag({ data }: { data: any }) {
  return (
    <div className={style.tagBox} style={{ backgroundColor: data.attributes.color }}>
      {data.attributes.categoryName}
    </div>
  );
}
