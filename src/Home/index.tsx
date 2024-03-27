import ListEntryCard from "../ListEntryCard";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2>Trending</h2>
            <ListEntryCard></ListEntryCard>
            <h3> New thing #1</h3>
            <h3> New thing #2</h3>
            <h3> New thing #3</h3>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>Following</h2>
                <h3> New thing #1</h3>
                <h3> New thing #2</h3>
                <h3> New thing #3</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h2>New Releases</h2>
                <h3> New thing #1</h3>
                <h3> New thing #2</h3>
                <h3> New thing #3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
