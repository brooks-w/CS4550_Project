

function SongEntryCard({ title = "title", length = "17:38", index = "-1" }) {
  return (  
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-10">
          <div className="card-body">
            <div className="card-title">
            {index}. {title}  <small className="text-body-secondary justify-content-end">{length}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongEntryCard;
