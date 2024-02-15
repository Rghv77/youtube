export const Hamburger_icon="https://s3-alpha.figma.com/hub/file/3104990295/84797193-e6a1-4c1f-a4e7-d543dd523f42-cover.png";
export const Hamburgerclose_icon="https://w7.pngwing.com/pngs/4/1018/png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol.png";
export const website_logo="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg";

export const logo="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png";
export const user_logo="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

const GOOGLE_API_KEY = "AIzaSyBorO3X_j5iVl6iOBA1Lhq8qJ2qpEfUU2k";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key="+GOOGLE_API_KEY;
 
export const related=(id)=>{
  const RELATED_VIDEOS_API="https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="+id+"&type=video&key="+GOOGLE_API_KEY;  
  return RELATED_VIDEOS_API;        
}
export const searchHandler=(query)=>{
  const YOUTUBE_SEARCH_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+query+"&key="+GOOGLE_API_KEY;
  return YOUTUBE_SEARCH_VIDEO_API
}
export const commentHandler=(id)=>{
  const YOUTUBE_COMMENT_API="https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+id+"&maxResults=100";
  return YOUTUBE_COMMENT_API
}
 

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination
