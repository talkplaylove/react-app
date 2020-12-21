import './VideosElement.scss'

function VideosElement({ video }) {
  return (
    <div className="video">
      <div className="thumbnail">
        <img alt="" src={video.thumbnail} />
      </div>
      <div className="info">
        <h5 className="title">{video.title}</h5>
        <p>좋아요 {video.likes}개 • {video.displayedAt}</p>
      </div>
    </div>
  )
}

export default VideosElement