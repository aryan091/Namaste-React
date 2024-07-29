import React, { useEffect , useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom'
import VideoCard , { AdVideoCard } from './VideoCard'
const VideoContainer = () => {

    const [videoList , setVideoList] = useState([])

    useEffect(() => {
        
        getVideos()

    },[])

    const getVideos = async () => {
        const data  = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        //console.log(json.items)
        setVideoList(json.items)
    }
  return (
    <div className='flex flex-wrap'>
        {videoList[0] && <AdVideoCard info={videoList[0]} />}
              {videoList.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}

    </div>
  )
}

export default VideoContainer