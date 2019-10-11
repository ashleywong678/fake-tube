//use axios library to make network request to api to fetch list of videos related to search
import axios from 'axios'
const KEY = 'AIzaSyDIEenGu5OOX62CJkvnS79NIVaWXSXFG6U'   // (hopefully) grabbing variable set in .env file

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', //tells youtube what type of data we want back
    maxResults: 15,  //number of results we want back
    key: KEY  //api key from google devs
  }
})