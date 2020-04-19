import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FaAlignJustify} from 'react-icons/fa';
import './CSSFiles/Nav.css'
const menuItems = [
    {value: 'الرئسية', to: '/'},  
    {value: ' من نحن ؟', to: '/aboutus'},
    {value: 'توصيات', to: '/recommendations'},
    {value: 'تطوع', to: '/volunteer'}
 ]
class Nav extends Component{
    constructor(props) {
        super(props)
        this.state = {
            toggle:false
            }
        this.Toggle = this.Toggle.bind(this)
      }
    Toggle = () => {
            this.setState({toggle:!this.state.toggle})
        }
        render () {
            const activeStyle = { color: 'rgb(233, 71, 71)' }
             return (
                <div className='Navbar-Style'>
                 <div className="Navbar-Two-Style">
                     <div className="Navbar-Two-Logo-Div-Style">
                         <p className="Navbar-Two-Logo-Style">
                             <span className="Navbar-Two-Logo-name-Style">
                             سَوِيًّا
                             </span>
                         </p>
                     </div>
                     <div className="Navbar-Two-Menu-Style">
                         <div className="navBar-Big-Screen">
                             {menuItems.map(menuItem => 
                            <Link className="Navbar-Links-Style"
                            //  onClick={this._handleClick.bind(this, menuItem.value)}
                             to={menuItem.to}
                            > 
                              {menuItem.value}
                            </Link>
                             )}
                         </div>
                         <div className="Navbar-Two-Menu-Style-navBar-Small-Screen">
                           <div className="navBar-Small-Screen">
                               <button onClick={this.Toggle} className="button-decoration-Small-Screen">
                                     <FaAlignJustify />
                               </button>
                            </div>
                            <div className="Navs-display-direction-Small-Screen">
                              <div className={this.state.toggle ? "links-Small-Screen show-nav-Small-Screen" : "links-Small-Screen"}>
                                  <div className="Navs-display-direction-Small-Screen">
                                      {menuItems.map(menuItem => 
                                         <Link className="Navbar-Links-Style"
                                         style={this.props.active === menuItem.value ? activeStyle : {}} 
                                         //  onClick={this._handleClick.bind(this, menuItem.value)}
                                          to={menuItem.to}
                                          toggle={this.state.toggle}
                                         > 
                                           {menuItem.value}
                                         </Link>
                                      )}
                                  </div>
                               </div>
                            </div>
                         </div>
                   </div>
                 </div>
            </div>
             )
     }
}
export default Nav