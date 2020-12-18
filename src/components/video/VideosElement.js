import './VideosElement.scss'
import { displayDate } from '../../utils/DateUtils'

function Video({ video }) {
  return (
    <div className="video">
      <div className="thumbnail">
        <img alt="" src={video.thumbnail} />
      </div>
      <div className="info">
        <h5 className="title">{video.title}</h5>
        <p>좋아요 {video.likeCount}개 • {displayDate(video.createdAt)}</p>
      </div>
    </div>
  )
}

export default Video