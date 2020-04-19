import React from 'react'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer.js'
import VolunteerCalls from './Components/VolunteerCalls.js'
class VolunteerCallsPage extends React.Component {
  render(){
             return (
             <div>
                  <Nav/>
                    <VolunteerCalls id={this.props.id} 
                                        firstname={this.props.firstname}
                                        lastname={this.props.lastname}
                                        address={this.props.address}
                                        email={this.props.email}
                                        phone={this.props.phone}
                                        skills={this.props.skills} />
                  <Footer/>
             </div>
             )
  }
}
export default VolunteerCallsPage