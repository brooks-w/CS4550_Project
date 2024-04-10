import axios from "axios";

const MB_URL = "https://musicbrainz.org/ws/2";

class MusicBrainzAPI {
  async search(resource: string, query: string | number | boolean) {
    const url = `${MB_URL}/${resource}?query=${encodeURIComponent(
      query
    )}&fmt=json`;
    const response = await axios.get(url);

    console.log("Axios response: ", response)
    return response.data;
  }

  async lookup(resource: string, query: string | number | boolean) {
    const url = `${MB_URL}/${resource}/${encodeURIComponent(query)}?fmt=json`;
    const response = await axios.get(url);
    return response.data;
  }
}

export default MusicBrainzAPI;
