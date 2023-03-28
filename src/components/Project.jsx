const Project = ({ image, tags, title, info, url }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <p>{tags}</p>
      </div>
      <div className="tour-footer">
        <a href={url} target="_blank" rel="noreferrer" className="btn">
          view
        </a>
      </div>
    </article>
  );
};

export default Project;
