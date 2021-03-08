import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { getChildrenToRender } from '../utils'
import './Nav.css'
import WhiteLogo from '../assets/WhiteLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as AuthState from '../../../State/Auth'

const { Item, SubMenu } = Menu

export const Nav = () => {
  const dispatch = useDispatch()

  const menuItems = [
    {
      name: 'item',
      className: 'header-item',
      needLogin: false,
      children: {
        href: '/',
        children: [{ children: 'Home', name: 'text' }],
      },
    },
    {
      name: 'item1',
      className: 'header-item',
      needLogin: true,
      children: {
        href: '/sound-record',
        children: [{ children: 'Sound record', name: 'text' }],
      },
    },
    {
      name: 'item3',
      className: 'header-item',
      needLogin: false,
      children: {
        href: '/history-page',
        children: [{ children: 'History page', name: 'text' }],
      },
    },
    localStorage.getItem('userToken')
      ? {
          name: 'item2',
          className: 'header-item',
          needLogin: true,
          children: {
            href: '/disconnect',
            children: [{ children: 'Disconnect', name: 'text' }],
            onClick: () => dispatch(AuthState.disconnect()),
          },
        }
      : {
          name: 'item2',
          className: 'header-item',
          needLogin: false,
          children: {
            href: '/login',
            children: [{ children: 'Login', name: 'text' }],
          },
        },
  ]

  const navChildren = menuItems.map(item => {
    const { children: a } = item

    if (item.needLogin && !localStorage.getItem('userToken')) return false

    return (
      <Item key={item.name} className="header home-page-wrapper">
        <a {...a} className={`header-item-block`}>
          {a.children.map(getChildrenToRender)}
        </a>
      </Item>
    )
  })

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      className="header home-page-wrapper"
    >
      <div className={`home-page`}>
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          className="header-logo"
        >
          <img src={WhiteLogo} alt="img" />
          <span>Who's that actor ?</span>
        </TweenOne>

        <TweenOne
          className="header-menu"
          animation={{
            height: 0,
            duration: 300,
            ease: 'easeInOutQuad',
          }}
          reverse
        >
          <Menu mode={'horizontal'} theme="dark">
            {navChildren}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  )
}
