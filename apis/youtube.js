//use axios library to make network request to api to fetch list of videos related to search
import axios from 'axios'
const KEY = API_KEY

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
})