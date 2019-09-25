import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Callback from './Callback'
import Welcome from './Welcome'

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/callback" component={Callback} />
                <Route path="/welcome" component={Welcome} />
                {/* <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} /> */}
            </div>
        </Router>
    )
}

export default App
