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
        <div className="tour-footer">
          <p>{tags}</p>
          <a href={url} target="_blank" className="btn">
            View
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
