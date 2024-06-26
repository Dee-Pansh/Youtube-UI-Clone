import { Link } from "react-router-dom"
import useCalculateTime from "../utils/Hooks/useCalculateTime"
const VideoCard = ({ videoDetails }) => {
  const { snippet } = videoDetails
  const { title, channelTitle, publishedAt } = snippet
  const thumbNailDetails = snippet?.thumbnails?.medium
  const { url } = thumbNailDetails

  const viewCount=videoDetails?.statistics?.viewCount


  const customizeCount = (count) => {
    const billion = 1e9;
    const million = 1e6;
    const thousands = 1e3;
    if (count >= billion)
      return `${Math.round(count / billion)}B`
    if (count > million)  
      return `${Math.round(count / million)}M`
    if (count > thousands)
      return `${Math.round(count / thousands)}k`
    return `${count}`
  }

  return <Link to={`/watch?v=${typeof(videoDetails?.id)==="object"?videoDetails?.id?.videoId:videoDetails?.id}`} ><div className="p-3 pl-0 w-60 m-2 ml-0 shadow-lg">
    <img src={url} alt="thumbnail" className="w-[100%] rounded-xl" />
    <p>{title}</p>
    <p className="text-gray-400">{channelTitle}</p>
    <p>{customizeCount(viewCount)} views • {useCalculateTime(publishedAt)} ago</p>
  </div>
  </Link>

}

const convertTime=(input)=>{
  if(input.includes("H"))
{
const output=input.match(/PT(\d+)H(\d+)M(\d+)S/)
return `${output[1].padStart('2','0')}:${output[2].padStart('2','0')}:${output[3].padStart('2','0')}`
}
else if(input.includes("M"))
{
const output=input.match(/PT(\d+)M(\d+)S/)
return `${output[1].padStart('2','0')}:${output[2].padStart('2','0')}`
}
else if(input.includes("S"))
{
const output=input.match(/PT(\d+)S/)   
return `${output[1].padStart('2','0')}`
}
}



export default VideoCard