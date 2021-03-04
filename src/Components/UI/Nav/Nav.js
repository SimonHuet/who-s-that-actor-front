import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { getChildrenToRender } from '../utils'
import './Nav.css'
import WhiteLogo from '../assets/WhiteLogo.png'

const menuItems = [
  {
    name: 'item',
    className: 'header-item',
    children: {
      href: '/',
      children: [{ children: 'Home', name: 'text' }],
    },
  },
  {
    name: 'item1',
    className: 'header-item',
    children: {
      href: '/sound-record',
      children: [{ children: 'Sound record', name: 'text' }],
    },
  },
  {
    name: 'item',
    className: 'header-item',
    children: {
      href: '/login',
      children: [{ children: 'Login', name: 'text' }],
    },
  },
]

const { Item, SubMenu } = Menu

export const Nav = () => {
  const navChildren = menuItems.map(item => {
    const { children: a, subItem, ...itemProps } = item
    if (subItem) {
      return (
        <SubMenu
          key={item.name}
          {...itemProps}
          title={
            <div {...a} className={`header-item-block ${a.className}`.trim()}>
              {a.children.map(getChildrenToRender)}
            </div>
          }
          popupClassName="header-item-child"
        >
          {subItem.map(($item, ii) => {
            const { children: childItem } = $item
            const child = childItem.href ? (
              <a {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </a>
            ) : (
              <div {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </div>
            )
            return (
              <Item key={$item.name || ii.toString()} {...$item}>
                {child}
              </Item>
            )
          })}
        </SubMenu>
      )
    }
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
