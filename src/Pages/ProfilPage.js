import React from 'react'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer.js'
import Profil from './Components/Profil.js'
class ProfilPage extends React.Component {
  render(){
             return (
             <div>
                  <Nav/>
                    <Profil id={this.props.id} />
                  <Footer/>
             </div>
             )
  }
}
export default ProfilPage