import 'antd/dist/antd.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SoundRecorder from './Components/SoundRecorder'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" />
      <Route path="/sound-record" component={SoundRecorder} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
)

export default App
