import type { ProjectData } from '~/routes/project';
import style from './ProjectItem.module.css';
import Tag, { type TagProps } from './Tag';
import Button from '~/components/ui/Button';

interface ProjectItemProps extends ProjectData {
  getTagColor: Map<string, string | undefined>;
}

const ProjectItem = ({ title, thumbnail, tags, content, links, getTagColor }: ProjectItemProps) => {
  return (
    <div className={style.projectItem}>
      <div className={style.projectItemImageWrap}>
        <img alt={title} src={thumbnail || '/images/misc/default-placeholder.png'} loading="lazy" />
      </div>
      <div className={style.projectItemData}>
        <div className={style.pItemInfo}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className={style.projectItemTags}>
          {tags.map((tag) => (
            <Tag name={tag} color={getTagColor.get(tag) || '#e2e2e2'} key={tag} />
          ))}
        </div>
        <div className={style.projectItemLinks}>
          {links.map((link) => (
            <Button
              text={link.label}
              target={link.target || '_blank'}
              href={link.url}
              key={link.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
