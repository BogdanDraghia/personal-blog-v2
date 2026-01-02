import type { ProjectData, TagData } from '~/routes/project';
import ProjectItem from './ProjectItem';
import style from './ProjectList.module.css';

interface ProjectListProps {
  projects: ProjectData[];
  tags: TagData[];
}

const ProjectList = ({ projects, tags }: ProjectListProps) => {
  const getTagColor = new Map(tags.map((tag) => [tag.name, tag.color]));
  return (
    <div className={style.projectList}>
      {projects.map((project, index) => (
        <ProjectItem {...project} getTagColor={getTagColor} key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
