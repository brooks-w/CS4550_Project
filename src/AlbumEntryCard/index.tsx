import { Link } from "react-router-dom";

function AlbumEntryCard({
  title = "title",
  artist = "artist",
  descriptionRight = "desc-right",
  summary = "summary",
  imageURL = "https://i.imgur.com/2d8J3tj.jpg",
  url = "#"
}) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={imageURL}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>    
        <div className="col-md-10">
          <div className="card-body">
            <div className="card-title">
              <Link to={url}><h2>{title}</h2></Link>
              <p className="card-text text-body-secondary">{artist}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumEntryCard;
