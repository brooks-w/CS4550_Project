import axios from "axios"

export interface songTypeMB{

}

export interface albumTypeMB{

}

export interface artistTypeMB{

}

const MB_URL = "https://musicbrainz.org/ws/2";

export async function getArtistByID(id= '65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab') {
    const url = MB_URL + '/artist/'+ id;
    const response = await axios.get(url);

    return response.data;
}

