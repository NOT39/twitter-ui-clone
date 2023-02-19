import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export const Tweet = ({content}: TweetProps) => {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/not39.png" alt="not" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>NOT</strong>
          <span>@not39</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}