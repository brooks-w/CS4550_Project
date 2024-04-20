import { Link } from "react-router-dom";
import LastFMAPI from "../LastFM";
import { useEffect, useState } from "react";

interface Artist {
  name: string;
  bio?: {
    summary: string;
  };
  image?: {
    "#text": string;
    size: string;
  }[];
}

function ArtistEntryCard({
  title = "title",
  descriptionLeft = "",
  descriptionRight = "",
  imageURL = "https://i.imgur.com/2d8J3tj.jpg",
  mbid = "",
  url = ""
}) {
  const lfmAPI = new LastFMAPI();

  const [data, setData] = useState<Artist | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getArtistInfo(mbid);

      console.log("Response in ArtistEntryCard: ", response);
      setData(response.artist);
    };
    fetchData();
  }, [mbid]);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imageURL}
            className="img-fluid rounded-start"
            alt="..."
            style={{ height: "75%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">
              <Link to={url}>{data?.name}</Link>
            </div>
            <div className="card-text container-fluid">
              <div className="row">
                <div className="col-6">{descriptionLeft}</div>

                <div className="col-6">{descriptionRight}</div>
              </div>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                {data?.bio?.summary}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistEntryCard;
