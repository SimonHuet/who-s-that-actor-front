import 'antd/dist/antd.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SoundRecord from './Components/SoundRecord'
import Login from './Components/Login'
import { Footer, Nav } from './Components/UI'

const App = () => (
  <Router>
    <Nav id="Nav" key="Nav" />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/sound-record" component={SoundRecord} />
      <Route path="/" component={HomePage} />
    </Switch>
    <Footer id="Footer" key="Footer" />
  </Router>
)

export default App
