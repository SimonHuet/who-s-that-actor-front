import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Row, Col } from 'antd'
import { getChildrenToRender } from '../utils'
import './Footer.css'
import WhiteLogo from '../assets/WhiteLogo.png'

const children = [
  {
    name: 'block0',
    xs: 24,
    md: 6,
    className: 'block',
    title: {
      className: 'logo',
      children: (
        <div className="footer-company">
          <img src={WhiteLogo} alt="img" />
          <span>Who's that actor ?</span>
        </div>
      ),
    },
    childWrapper: {
      className: 'slogan',
      children: [
        {
          name: 'content0',
          children: "Find the actor you've heard",
        },
      ],
    },
  },
  {
    name: 'block1',
    xs: 24,
    md: 6,
    className: 'block',
    title: { children: 'The project' },
    childWrapper: {
      children: [
        {
          name: 'link0',
          href: `${process.env.REACT_APP_SITE}`,
          children: 'Project explanation',
        },
        {
          href: `${process.env.REACT_APP_SITE}#faq`,
          name: 'link1',
          children: 'FAQ',
        },
      ],
    },
  },
  {
    name: 'block2',
    xs: 24,
    md: 6,
    className: 'block',
    title: { children: 'Using it' },
    childWrapper: {
      children: [
        { href: '/sound-record', name: 'link1', children: 'Record a sound' },
      ],
    },
  },
  {
    name: 'block3',
    xs: 24,
    md: 6,
    className: 'block',
    title: { children: '' },
    childWrapper: {
      children: [],
    },
  },
]

export const Footer = ({ id }) => {
  const getLiChildren = data =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item
      return (
        <Col key={i.toString()} {...itemProps} title={'Test'} content={null}>
          <h2 {...title}>{title.children}</h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      )
    })

  const childrenToRender = getLiChildren(children)

  return (
    <div id={id} className="home-page-wrapper footer-wrapper">
      <OverPack className="footer" playScale={0.2}>
        <QueueAnim
          type="bottom"
          key="ul"
          leaveReverse
          component={Row}
          className="home-page"
          gutter={0}
        >
          {childrenToRender}
        </QueueAnim>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          className="copyright-wrapper"
        >
          <div className="copyright">
            <span>
              ©2021 by
              <a href={process.env.REACT_APP_SITE}> Who's That actor ?</a> All
              Rights Reserved
            </span>
          </div>
        </TweenOne>
      </OverPack>
    </div>
  )
}
