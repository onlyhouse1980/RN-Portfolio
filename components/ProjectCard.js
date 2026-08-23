export default function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      <div className="projectMeta">{project.category}</div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tagRow">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
      {(project.repoUrl || project.liveUrl) ? (
        <div className="projectProofLinks">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live product ↗</a> : null}
          {project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer">Public repository ↗</a> : null}
        </div>
      ) : null}
    </article>
  );
}
