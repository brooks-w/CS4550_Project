function ListEntryCard({title = "title", descriptionLeft = "desc-left", descriptionRight = "desc-right", summary = "summary", imageURL = "https://i.imgur.com/2d8J3tj.jpg"}) {
 
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageURL} className="img-fluid rounded-start" alt="..." style={{height: '75%'}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-text container-fluid">
                <div className="row">
                 <div className="col-6">
                    {descriptionLeft}
                  </div>

                  <div className="col-6">
                    {descriptionRight}
                  </div>
                  </div> 
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                {summary}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEntryCard;
