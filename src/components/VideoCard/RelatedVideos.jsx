import React, { useCallback, useEffect, useState } from 'react'
import { getRelatedVideos } from '../../helpers/fetchingData'
import VideoCard from '../../components/VideoCard'

const relatedVideos = ({ currentVideo }) => {

  const [relatedVideos, setRelatedVideos] = useState([second])

  const loadRelatedVideos = useCallback( async () => {
    const relVideos = await getRelatedVideos(currentVideo);
    const relVideosInfo = await getVideoInfo(relVideos);
    setRelatedVideos(relVideosInfo);
  }, [currentVideo])

  useEffect(() => {
    loadRelatedVideos(); 
  }, [loadRelatedVideos])
  
  const relatedVideoMarkup = relatedVideos?.map(video => (
    <VideoCard 
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      info={video.snippet}
      eInfo={video.etraInfo}
      img={video.snippet.thumbnails.medium.url}
      channelInfo={video.channelInfo}
    />
  ))


  return (
    <div  className='related_list'>
      {relatedVideoMarkup}
    </div>
  )
}

export default RelatedVideos