import { useParams } from "react-router";

function Details() {
  const { type, id } = useParams();

  if (type === "artist") {
    return returnArtist(id);
  } else if (type === "album") {
    return returnAlbum(id);
  } else {
    return <h1> Improper fields</h1>;
  }
}
function returnArtist(id: any) {
  return (
    <div>
      <h1> Details about artist {id} </h1>
    </div>
  );
}

function returnAlbum(id: any) {
  return (
    <div>
      <h1> Details about album {id} </h1>
    </div>
  );
}

export default Details;
