import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import AboutUs from './AboutUs.js'
const CallHome = () => (
    <Home />
    )
const CallAboutus= () => (
    <AboutUs />
    )
class UsingRouter extends React.Component{
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={CallHome} />
                    <Route exact path="/Aboutus" component={CallAboutus}/>
                </Switch>
            </div>
        )
    }

}
export default UsingRouter