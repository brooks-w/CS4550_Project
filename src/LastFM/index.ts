import axios from "axios";


class LastFMAPI {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = process.env.REACT_APP_LASTFM_API_KEY || 'ERROR:APIKEYNOTFOUND';
    this.baseUrl = 'https://ws.audioscrobbler.com/2.0';
  }

  async searchArtist(query: string) {
    const url = `${this.baseUrl}/?method=artist.search&artist=${encodeURIComponent(query)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);

    console.log("SearchArtist returned: ", response)

    return response.data;
  }

  async searchAlbum(query: string) {
    const url = `${this.baseUrl}/?method=album.search&album=${encodeURIComponent(query)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);

    console.log("SearchAlbum returned: ", response)

    return response.data;
  }

  async searchTrack(query: string) {
    const url = `${this.baseUrl}/?method=track.search&track=${encodeURIComponent(query)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);
    return response.data;
  }

  async getAlbumInfo(mbid: string) {
    const url = `${this.baseUrl}/?method=album.getinfo&mbid=${encodeURIComponent(mbid)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);
    return response.data;
  }

  async getArtistInfo(mbid: string) {
    const url = `${this.baseUrl}/?method=artist.getinfo&mbid=${encodeURIComponent(mbid)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);

    console.log("GetArtistInfo returned: ", response)


    return response.data;
  }

  async getAlbumsByArtist(mbid: string) {
    const url = `${this.baseUrl}/?method=artist.gettopalbums&mbid=${encodeURIComponent(mbid)}&api_key=${this.apiKey}&format=json`;
    const response = await axios.get(url);

    console.log("GetAlbumsByArtist returned: ", response);
    
    return response.data;
  }

  
}

export default LastFMAPI;