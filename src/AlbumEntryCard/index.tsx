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
      <div className="row p-2 g-0">
        <div className="align-items-center col-2 col-lg-4 ">
          <img
            src={imageURL}
            className=" img-fluid rounded"
            alt="..."
          />
        </div>    
        <div className="col-10 col-lg-8">
          <div className="card-body">
            <div className="card-title">
              <Link to={url}><h2>{title}</h2></Link>
              <h5 className="card-text text-body-secondary">{artist}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumEntryCard;
