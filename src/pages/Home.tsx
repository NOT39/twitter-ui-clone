import { KeyboardEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { Tweet, Header, Separator } from '../components'
import './Home.css'

export const Home = () => {
  const [ tweets, setTweets ] = useState([
    'Meu Primeiro tweet',
    'Deu certo o tweet',
    'Tweet'
  ])

  const tweetInputRef = useRef<HTMLTextAreaElement>(null)
  
  const createNewTweet = useCallback((e: FormEvent) => {
    e.preventDefault()

    const tweetValue = tweetInputRef.current?.value.trim()
    
    if(!tweetValue) return;

    setTweets(prevTweets => [...prevTweets, tweetValue])
  }, [tweetInputRef])

  const handleHotkeySubmit = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {

      const tweetValue = tweetInputRef.current?.value.trim()
      if(!tweetValue) return;

      setTweets(prevTweets => [...prevTweets, tweetValue])
    }
  }, [tweetInputRef])
  
  return (
    <div className="content">
      <main className="timeline">
        <Header title="Home"/>

        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/not39.png" alt="Not" />
            <textarea 
              ref={tweetInputRef} 
              id="tweet" 
              placeholder="What's happening?" 
              onKeyDown={handleHotkeySubmit}
            />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
        })}
      </main>
    </div>
  )
}