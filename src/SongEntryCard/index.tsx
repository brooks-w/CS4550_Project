function SongEntryCard({
    title = "title",
    length = "17:38",
    id = "1234",
  }) {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <button type="button">Like</button>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <div className="card-title">{title}</div>
              <p className="card-text">
                <small className="text-body-secondary">{length}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SongEntryCard;
  