import axios from "axios";

const API_URL = "https://dev.to/api/articles?username=tahsin005";
const MEDIUM_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tahsin.ferdous3546'
export async function getArticles() {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get Articles");
  }
}
