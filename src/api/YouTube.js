import axios from 'axios';
const KEY = 'AIzaSyAtovwWuKbwQeDO-uTp--aU7HqYKY_KP04';

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
   }
});