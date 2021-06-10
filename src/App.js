import React, {Component} from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import {AuthProvider} from './UserAuthentication/AuthContext'
import './App.css';

import Login from "./UserAuthentication/Login" // Login page
import Home from "./Home"  // Main page


class App extends Component {
    render() {
        return (  
            <>
                 <Router>
                    <AuthProvider>
                        <Switch>
                            <Route exact path = "/" component = {Login}/>
                            <Route path = "/login" component={Login}/>
                            <Route path="/home" component={Home} />
                        </Switch>
                    </AuthProvider>
                </Router> 
            </> 
        );
    }
}

export default App;
