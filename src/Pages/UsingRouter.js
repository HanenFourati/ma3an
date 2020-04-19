import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import AboutUs from './AboutUs.js'
import Recommendation from './Recommendation.js'
import Volunteer from './Volunteer.js'
import ProfilPage from './ProfilPage.js'
import VolunteerCallsPage from './VolunteerCallsPage.js'
const CallHome = () => (
    <Home />
    )
const CallAboutus = () => (
    <AboutUs />
    )
const CallRecommendation = () => (
    <Recommendation />
    )
const CallVolunteer = () => (
   <Volunteer />
   )
class UsingRouter extends React.Component{
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={CallHome} />
                    <Route exact path="/aboutus" component={CallAboutus}/>
                    <Route exact path="/recommendations" component={CallRecommendation}/>
                    <Route exact path="/volunteer" component={CallVolunteer}/>
                    <Route exact path="/volunteer/:id" render={(props)=> <ProfilPage  id={props.match.params.id} />} />
                    <Route exact path="/volunteer/:id/:firstname/:lastname/:address/:email/:phone/:skills/volunteercalls" 
                    render={(props)=> <VolunteerCallsPage  id={props.match.params.id} 
                    firstname={props.match.params.firstname}
                    lastname={props.match.params.lastname}
                    address={props.match.params.address}
                    email={props.match.params.email}
                    phone={props.match.params.phone}
                    skills={props.match.params.skills}
                    />} />
                </Switch>
            </div>
        )
    }

}
export default UsingRouter