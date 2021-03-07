import Form from 'antd/lib/form/Form'
import { useState } from 'react'
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

export const SoundRecorder = () => {
  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  })

  const handleAudioStop = data => {
    console.log(data)
    setAudioDetails(data)
  }

  const handleAudioUpload = file => {
    console.log(file)
  }

  const handleRest = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    }
    setAudioDetails({ reset })
  }

  return (
    <Recorder
      record={true}
      title={"Record the actor's voice"}
      audioURL={audioDetails.url}
      showUIAudio
      handleAudioStop={data => handleAudioStop(data)}
      handleAudioUpload={data => handleAudioUpload(data)}
      handleRest={() => handleRest()}
    />
  )
}
