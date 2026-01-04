import Tag from '~/components/modules/Projects/Tag';
import projectsRawData from '@content/projects/data.json';
import ProjectList from '~/components/modules/Projects/ProjectList';
import style from './project.module.css';

export interface TagData {
  name: string;
  color: string;
}

interface ProjectLink {
  label: string;
  url: string;
  target?: '_blank' | '_self';
}

export interface ProjectData {
  title: string;
  thumbnail: string;
  content: string;
  tags: string[];
  links: ProjectLink[];
}

export interface ProjectsCollection {
  tags: TagData[];
  projects: ProjectData[];
}

const data = projectsRawData as ProjectsCollection;

const Projects = () => {
  const { projects, tags } = data;
  return (
    <div className="content">
      <h1>Projects</h1>
      <ProjectList projects={projects} tags={tags} />
    </div>
  );
};
export default Projects;
