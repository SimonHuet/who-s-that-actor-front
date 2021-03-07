import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import * as RecordState from '../../State/Record'

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

  const dispatch = useDispatch()

  const handleAudioStop = data => {
    setAudioDetails(data)
  }

  const handleAudioUpload = file => {
    dispatch(RecordState.uploadAudio({ file }))
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
      handleAudioStop={handleAudioStop}
      handleAudioUpload={handleAudioUpload}
      handleRest={() => handleRest()}
    />
  )
}
