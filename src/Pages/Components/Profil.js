import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import favatar from '../../Images/femaleAvatar.png'
import mavatar from '../../Images/maleAvatar.png'
import AddVCallModel from './AddVCallModel'
class Profil extends Component {
  
    componentDidMount(){ 
        axios.get('/volunteer/'+this.props.id).then(res => this.props.inituser(res.data))
        .catch(error => {console.log(error)});
    }
    render() {
        const {UserDetails}=this.props
        return (
        <div style={{backgroundColor: "#202020", color: "white", padding: "2%"}}>

          <div style={{display: "flex", flexDirection: "row"}}>
               <div style={{width: "60%", textAlign: "right", fontSize: "30px", padding: "2%"}}>
                 <div >{UserDetails.username} : اللإسم المستخدم</div>
                 <div>{UserDetails.firstname} : الإسم</div>
                 <div>{UserDetails.lastname} : اللقب</div>
                 <div>{UserDetails.address} : العنوان</div>
                 <div>{UserDetails.email} : البريد الإلكتروني</div>
                 <div>{UserDetails.phone} : الهاتف</div>
                 <div>{UserDetails.gender} : الجنس</div>
                 <div>{UserDetails.skills} : المهارات</div>
                 <div>
                    <AddVCallModel id={this.props.id}/>
                    <Link to={`/volunteer/${this.props.id}/${UserDetails.firstname}/${UserDetails.lastname}/${UserDetails.address}/${UserDetails.email}/${UserDetails.phone}/${UserDetails.skills}/volunteercalls`} style={{color: "#108994", textDecoration: "none", fontSize: "20px"}}>نداءات مشاريع التطوع</Link>
                   
                 </div>
               </div>
               <div>
                 {UserDetails.gender==="F" ? <img src={favatar} alt="femaleavatar" /> : <img src={mavatar} alt="maleavatar" /> }
               </div>
          </div>
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { UserDetails : state.UserReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    inituser: user => { 
    dispatch({
      type: "LOED_USER",  
      user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil)