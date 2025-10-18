import { LazyMotion, m, domMax } from 'framer-motion';
import Tag from './Tag';
import style from './ProjectItem.module.css';

const ProjectItem = ({ data, urls }: { data: any; urls: { back: string; provider: string } }) => {
  const content: string = data.attributes.content ?? '';
  const short =
    content.length > 100 ? content.slice(0, content.slice(0, 120).lastIndexOf(' ')) + '…' : content;

  return (
    <LazyMotion features={domMax}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.projectItem}
      >
        <div className={style.projectItemPhoto}>
          <img
            className={style.projectItemPhotoImage}
            src={data.attributes.thumbnailUrl || '/images/misc/profile.JPG'}
            alt={data.attributes.title ?? 'project image'}
            loading="lazy"
          />
        </div>

        <div className={style.projectItemInfo}>
          <div className={style.pItemTittle}>
            <h2>{data.attributes.title}</h2>
            <p>{short}</p>
          </div>

          <div className={style.pItemTags}>
            {data.attributes.categories.data.map((cat: any, i: number) => (
              <Tag key={i} data={cat} />
            ))}
          </div>

          <div className={style.pItemLinks}>
            <a
              target="_blank"
              href={data.attributes.source}
              rel="noreferrer"
              className={style.buttonProjects}
            >
              Source
            </a>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};
export default ProjectItem;
