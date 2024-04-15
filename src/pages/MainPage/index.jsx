import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import VideoCard from '../../components/VideoCard';

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'));
  const [mainVideos, setMainVideos] = useState([]);
  const {setIsToggled} = useContext(SidebarContext);
  
  const getMainVideos = useCallback(async () => {
    try {
      if(!storedVideos) {

        const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful$20place`)
        let videosArray = response.data.items;
        videosArray = await getVideoinfo(videosArra );
        setMainVideos(videosArray);
        localStorage.setItem('mainVideos', JSON.stringify(videosArray));
      }
    } catch (error) {
      console.log(error);
  }
  }, [])
    

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos])

  useEffect(() => {
    setIsToggled(true);
  }, [])
  

  return (
    <section className='mainGallery'>
      {mainVideos.map(video => (
        <VideoCard 
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={videoideo.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}

    </section>
  )
}

export default MainPage