import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import ListEntryCard from "../ListEntryCard";
import { useSelector } from "react-redux";
import * as client from "../Users/client";

function Home() {
  const { currentUser } = useSelector((state: any) => state.users);

  //app.get("/api/likes", findAllLikes);
  const [genericLikes, setGenericLikes] = useState<any>([]);
  const [userLikes, setUserLikes] = useState<any>([]);

  const sortLikesByRecent = (likes: any[]) => {
    return likes.sort(
      (a, b) => new Date(b._id).getTime() - new Date(a._id).getTime()
    );
  };

  const getGenericLikes = async () => {
    const likes = await client.getAllLikes();
    console.log("LikeList: ", likes);
    const sortedLikes = sortLikesByRecent(likes);
    console.log("SortedLikeList: ", sortedLikes);

    if (currentUser) {
      const userLikes = sortedLikes.filter(
        (like: any) => like.user === currentUser._id
      );
      setUserLikes(userLikes);
    }
    setGenericLikes(sortedLikes);
  };

  useEffect(() => {
    getGenericLikes();
  }, []);

  for (let i = 0; i < 5; i++) {
    if (genericLikes.length < i) {
      break;
    }
    //truncatedGenericLikes.push(genericLikes[i]);
  }

  return (
    <div style={{ height: "100%" }}>
      <div className="container-fluid">
        <div className="row">
          {currentUser && (
            <div className="col-md-6">
              <h2>User Likes</h2>
              <ul>
                {userLikes.length > 0 &&
                  userLikes.slice(0, 5).map((like: any, key: number) => (
                    <li key={like._id}>
                      Album: {like.album}, User: {like.user}, Created At:{" "}
                      {like._id}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <div className="col-md-6">
            <h2>5 Most Recently Liked Albums:</h2>
            <ul>
              {genericLikes.slice(0, 5).map((like: any, key: number) => (
                <li key={like._id}>
                  Album: {like.album}, User: {like.user}, Created At: {like._id}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
