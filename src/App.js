import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import AboutMe from './component/Pages/AboutMe'
import ContactMe from './component/Pages/ContactMe'
import Home from './component/Pages/Home'
import Projects from './component/Pages/Projects'

import DATA from './component/Pages/content.json'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='header-nav'>
            <ul className='header-nav__wrapper'>
              {DATA.urls.map(url =>
                <li key={url.name}>
                  <Link to={url.path}>{url.name}</Link>
                </li>
              )}  
            </ul>
          </div>
          <Switch>
            <Route exact path={DATA.urlToHome} component={Home}/>
            <Route path={DATA.urlToAboutMe} component={AboutMe}/>
            <Route path={DATA.urlToProjects} component={Projects}/>
            <Route path={DATA.urlToContactMe} component={ContactMe}/>
            <Redirect to={DATA.urlToHome}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App