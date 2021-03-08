import 'antd/dist/antd.css'
import HomePage from './Components/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import SoundRecord from './Components/SoundRecord'
import Login from './Components/Login'
import { Footer, Nav } from './Components/UI'
import RedirectToHome from './Utils/RedirectToHome'
import HistoryPage from './Components/HistoryPage'

const App = () => (
  <Router>
    <Nav id="Nav" key="Nav" />
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/sound-record" component={SoundRecord} />
      <Route path="/" component={HomePage} />
      <Route path="/History" componont={HistoryPage} />
      <Route path="/disconnect" component={RedirectToHome} />
    </Switch>
    <Footer id="Footer" key="Footer" />
  </Router>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('userToken') ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

export default App
