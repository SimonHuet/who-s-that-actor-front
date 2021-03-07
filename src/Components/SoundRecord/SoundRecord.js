import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Recorder } from 'react-voice-recorder'
import { Avatar, Descriptions } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'react-voice-recorder/dist/index.css'
import * as RecordState from '../../State/Record'
import './SoundRecorder.css'

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

  const [isRequested, setIsRequested] = useState(true)

  const prediction = useSelector(RecordState.select.prediction)
  const error = useSelector(RecordState.select.error)

  const dispatch = useDispatch()

  const handleAudioStop = data => {
    setAudioDetails(data)
  }

  const handleAudioUpload = file => {
    dispatch(RecordState.uploadAudio({ file }))
    setIsRequested(true)
  }

  const handleReset = () => {
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
    setAudioDetails(reset)
    setIsRequested(false)
  }

  return (
    <div>
      <Recorder
        record={true}
        title={"Record the actor's voice"}
        audioURL={audioDetails.url}
        showUIAudio
        handleAudioStop={handleAudioStop}
        handleAudioUpload={handleAudioUpload}
        handleRest={() => handleReset()}
      />

      {isRequested && prediction && (
        <div className="pred-wrapper">
          {console.log(prediction)}
          <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <Descriptions title="Actor Infos">
              <Descriptions.Item label="First Name">
                {prediction.first_name}
              </Descriptions.Item>
              <Descriptions.Item label="Last Name">
                {prediction.last_name}
              </Descriptions.Item>
              <Descriptions.Item label="IMDB profile">
                {prediction.url_imdb ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={prediction.url_imdb}
                  >
                    Go to profile
                  </a>
                ) : (
                  <p>There is no imdb profile for that actor</p>
                )}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      )}
      {isRequested && error && <div className="error">{error.message}</div>}
    </div>
  )
}
