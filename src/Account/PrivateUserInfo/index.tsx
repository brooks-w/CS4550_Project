function PrivateUserInfo(){
    return (
        <>
        <div className="container text-center">
        <div className="row align-items-start">
        <div className="col">
            <h1>Private User Info</h1>
            <h2>User Information</h2>
        <ul>
            <div className=""><li>Name: <input placeholder="William Brooks"></input><button>Submit</button></li></div>
            <li>Username: <input placeholder="brooks-w"></input><button>Submit</button></li>
            <li>Email: brooks.w@northeastern.edu</li>
        </ul>
        <h2>Quick Facts</h2>
        <ul>
            <li>Favorite Artist: <input placeholder="The Beatles"></input><button>Submit</button></li>
            <li>Favorite Song: <input placeholder="20"></input><button>Submit</button></li>
        </ul>
        </div>
        <div className="col">
            <img src="https://i.imgur.com/2d8J3tj.jpg" alt="William Brooks" width="200" height="200"/>
            <button>Upload New Picture</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default PrivateUserInfo;