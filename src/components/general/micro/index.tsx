import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Dictaphone: React.FC = (props) => {
  const commands = [
    {
      command: 'Создать задачу *',
      callback: (todo: any) => setMessage(`${todo}`)
    }]
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [message, setMessage] = useState('');
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('not work');
    return null
  }
  return (
    <div>
      {/*@ts-ignore ts bad (*/}
      <button onClick={SpeechRecognition.startListening({ language: 'ru' })}>Start</button>
      <p>Тест {message}</p>
    </div>
  )
}
