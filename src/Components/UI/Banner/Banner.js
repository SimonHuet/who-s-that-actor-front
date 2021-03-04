import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import Logo from '../assets/Logo.png'
import './Banner.css'

export const Banner = ({ id }) => {
  return (
    <div id={id} className="banner">
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        delay={200}
        className="banner-text-wrapper"
      >
        <div key="title" className="banner-title">
          <img src={Logo} width="100%" alt="img" />
        </div>
        <div key="content" className="banner-content">
          Who's that actor ?
        </div>
        <Button
          href="/sound-recorder"
          ghost
          key="button"
          className="banner-button"
        >
          Try it
        </Button>

        <TweenOne
          animation={{
            y: '-=15',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </QueueAnim>
    </div>
  )
}
