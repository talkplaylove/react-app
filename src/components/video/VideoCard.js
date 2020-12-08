import React, { useState } from 'react'
import { Col, Card, Row } from 'react-bootstrap'

import './VideoCard.css'

function VideoCard({ video }) {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3} className="video">
      <Card>
        <Card.Img className="thumbnail" variant="top" src={video.thumbnail} />
        <Card.Body className="card-body">
          <Card.Title className="title">{video.title}</Card.Title>
          <Card.Text className="meta">좋아요 {video.likeCount}개 • {video.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default VideoCard