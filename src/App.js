import 'antd/dist/antd.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SoundRecorder from './Components/SoundRecorder'
import Login from './Components/Login'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/sound-record" component={SoundRecorder} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
)

export default App
