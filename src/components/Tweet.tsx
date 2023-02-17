import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

export const Tweet = () => {
  return (
    <a href='#' className="tweet">
      <img src="https://github.com/not39.png" alt="not" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>NOT</strong>
          <span>@not39</span>
        </div>

        <p>fadfasfdfas</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>

          <button type='button'>
            <ArrowsClockwise />
            20
          </button>

          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}