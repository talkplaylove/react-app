import './VideoPlayer.scss'

function VideoPlayer() {
  return (
    <div>
      <video className="player" controls>
        <source src="http://localhost:8080/vod/christmas.mp4"></source>
      </video>
    </div>
  )
}

export default VideoPlayer