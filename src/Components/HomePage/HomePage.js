import { Banner, Footer, Nav } from '../UI'
import './HomePage.css'

const children = [
  <Nav id="Nav" key="Nav" />,
  <Banner id="Banner" key="Banner" />,
  <Footer id="Footer" key="Footer" />,
]

export const HomePage = () => <div className="wrapper">{children}</div>
