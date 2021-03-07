import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Recorder } from 'react-voice-recorder'
import { Avatar, Descriptions } from 'antd'
import { UserOutlined } from '@ant-design/icons'
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

  const [isRequested, setIsRequested] = useState(false)

  // const prediction = useSelector(RecordState.select.prediction)
  const error = useSelector(RecordState.select.error)
  const prediction = {
    code_ia: 8976,
    first_name: 'Eddy',
    id: '4e285991-63e9-4c56-b8b2-4e0fa0f1174a',
    last_name: 'Cheval',
    url_imdb: 'https://www.imdb.com/name/nm4236091/?ref_=nv_sr_srsg_0',
  }

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

      {prediction && (
        <div className="pred-wrapper">
          {console.log(prediction)}
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
                <a target="_blank" rel="noreferrer" href={prediction.url_imdb}>
                  Go to profile
                </a>
              ) : (
                <p>There is no imdb profile for that actor</p>
              )}
            </Descriptions.Item>
          </Descriptions>
          ,
        </div>
      )}
    </div>
  )
}
