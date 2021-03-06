import React, { useEffect, useState } from 'react'
import axios from 'axios'

import HomeAd from '../components/home/HomeAd'
import Videos from '../components/video/Videos'
import HomeNav from '../components/home/HomeNav'

function HomePage() {
  let [params, setParams] = useState({ page: 0, size: 8 })
  let [finished, isFinished] = useState(false)
  let [videos, setVideos] = useState([])
  useEffect(nextVideos, [])

  window.onscroll = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      nextVideos()
    }
  }

  function nextVideos() {
    if (videos.length > 80) return
    if (finished) return

    axios.get(`/videos`, {
      params: params
    }).then(result => {
      if (result.status === 200) {
        const nextVideos = result.data
        if (nextVideos.length > 0) {
          setVideos([...videos, ...nextVideos])
          setParams([...params.page++])
        } else if (nextVideos.length === 0) {
          isFinished(true)
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <HomeNav />
      <HomeAd />

      <Videos videos={videos} />
    </>
  )
}

export default HomePage