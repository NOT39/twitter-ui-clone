import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useCallback, useRef, useState } from 'react'
import { Tweet, Header, Separator } from '../components'

import './Status.css'

export const Status = () => {
  const [ answers, setAnswers ] = useState([
    'Concordo...',
    'Uhum',
    'Legal!'
  ])

  const answerInputRef = useRef<HTMLTextAreaElement>(null)
  
  const createNewAnswer = useCallback((e: FormEvent) => {
    e.preventDefault()

    const answerValue = answerInputRef.current?.value.trim()
    if(!answerValue) return;

    setAnswers(prevAnswers => [...prevAnswers, answerValue])
  }, [answerInputRef])

  const handleHotkeySubmit = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {

      const answerValue = answerInputRef.current?.value.trim()
      if(!answerValue) return;

      setAnswers(prevAnswers => [...prevAnswers, answerValue])
    }
  }, [answerInputRef])
  
  return (
    <div className="content">
      <main className="timeline">
        <Header title="Tweet"/>

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi sed, enim ab qui laudantium porro debitis, suscipit similique repellendus non unde optio mollitia maxime soluta corporis laborum dolore. Quas?"/>

        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/not39.png" alt="Not" />
            <textarea 
              ref={answerInputRef} 
              id="tweet" 
              placeholder="Tweet your answer"
              onKeyDown={handleHotkeySubmit} 
            />
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>

        {answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })}
      </main>
    </div>
  )
}