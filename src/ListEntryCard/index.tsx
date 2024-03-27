function ListEntryCard() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">Title</div>
            <div className="card-text container-fluid">
                <div className="row">
                 <div className="col-6">
                    Description 1
                  </div>

                  <div className="col-6">
                    Description 2
                  </div>
                  </div> 
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                Summary LIPSUM
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEntryCard;
