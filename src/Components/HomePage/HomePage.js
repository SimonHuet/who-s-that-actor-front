import { Banner, Content, Footer, Nav } from '../UI/index'
import './HomePage.css'

import { Content00DataSource, Footer10DataSource } from './data.source'

const children = [
  <Nav id="Nav" key="Nav" />,
  <Banner id="Banner" key="Banner" />,
  <Content id="Content" key="Content" dataSource={Content00DataSource} />,
  <Footer id="Footer" key="Footer" dataSource={Footer10DataSource} />,
]

export const HomePage = () => <div className="wrapper">{children}</div>
