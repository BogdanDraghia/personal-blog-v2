import style from './AlertBuildMode.module.css';

export default function AlertBar() {
  return (
    <div className={style.bar}>
      <div className={style.content}>
        <strong>Work in progress:</strong>&nbsp;I'm migrating this site from Next.js to React Router
        v7 and TypeScript.
      </div>
    </div>
  );
}
