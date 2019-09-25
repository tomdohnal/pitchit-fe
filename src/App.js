import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'

import Home from './Home'
import Callback from './Callback'
import Welcome from './Welcome'
import Goals from './Goals'
import Analysis from './Analysis'
import Save from './Save'
import Savings from './Savings'

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/callback" component={Callback} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/goals" component={Goals} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/save" component={Save} />
                <Route path="/savings" component={Savings} />
            </div>
        </Router>
    )
}

export default App
