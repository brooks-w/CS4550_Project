import axios from "axios";

export interface songTypeMB {}

export interface albumTypeMB {}

export interface artistTypeMB {}

const MB_URL = "https://musicbrainz.org/ws/2";

class MusicBrainzAPI {

    async search(resource: string, query: string | number | boolean) {
    const url = `${MB_URL}/${resource}?query=${encodeURIComponent(query)}&fmt=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  searchArtists(query: string | number | boolean) {
    return this.search('artist', query);
  }

  searchAlbums(query: string | number | boolean) {
    return this.search('release', query);
  }

  searchTracks(query: string | number | boolean) {
    return this.search('recording', query);
  }
}

export default MusicBrainzAPI;