const GOOGLE_API_KEY = "AIzaSyBXfsVMaFdMfRpymaRK2akDbymKjNaHbK8"

export const YOUTUBE_VIDEOS_API=`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&maxResults=`

export const VIDEO_COMMENTS_API=`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&videoId=`

export const COMMENT_API=`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&part=snippet&id=`;

export const YOUTUBE_SEARCH_SUGGESTION=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

export const YOUTUBE_SEARCH_VIDEOS=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${GOOGLE_API_KEY}&q=`

export const LIVE_CHAT_COUNT=10;