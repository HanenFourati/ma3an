import React,{Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class AddUser extends Component{
  constructor () {
    super()
    this.onAddUser = this.onAddUser.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddUser = () => {
    axios.post('/volunteer/adduser', this.state)
      .then(() => {
        this.props.onAddUserReducerAction(this.state)
        console.log(this.state)
        this.props.history.push(`/volunteer`)
        })
      .catch(err => {alert(err)})
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    const inputsylt={
      height: "40px",
      width: "100%",
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      textAlign: "right"
    }
      return(
        <div>
          <form style={{padding: "1%", textAlign: "right"}}>
              <label for="username"><b>اسم المستخدم</b></label> <br/>  <br/> 
              <input type="text" placeholder="اسم المستخدم" name="username" required onChange={this.onChange} style={inputsylt}/> <br/>  <br/> 
              <label for="password"><b>كلمة السر</b></label> <br/> <br/> 
              <input type="text" placeholder="كلمة السر" name="password" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="firstname"><b>الاسم</b></label> <br/>
              <input type="text" placeholder="الاسم" name="firstname" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="lastname"><b>اللقب</b></label> <br/> <br/> 
              <input type="text" placeholder="اللقب" name="lastname" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="address"><b>العنوان</b></label> <br/> <br/> 
              <input type="text" placeholder="العنوان" name="address" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="email"><b>البريد الإلكتروني</b></label> <br/> <br/> 
              <input type="text" placeholder="البريد الإلكتروني" name="email" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="phone"><b>رقم الهاتف</b></label> <br/> <br/> 
              <input type="text" placeholder="رقم الهاتف" name="phone" required onChange={this.onChange} style={inputsylt}/> <br/> <br/> 
              <label for="gender"><b>الجنس</b></label> 
              <select name="gender" onChange={this.onChange} >
                  <option value="M">ذكر</option>
                  <option value="F">أنثي</option>
              </select> <br/> <br/> 
              <label for="skills"><b>المهارات</b></label> <br/> <br/> 
              <input type="text" placeholder="المهارات" name="skills" required onChange={this.onChange} style={inputsylt}/>
              <br/> <br/> <br/> 
              <Link style={{textDecoration: "none", backgroundColor: "rgb(248, 167, 37)", color: "White", borderRadius: "5px", padding: "1%", border: "1px solid rgb(248, 167, 37)"}} onClick={this.onAddUser} to={'/volunteer/adduser'}>إنشاء</Link>
          </form>
       </div>
      )
    }

}
const mapStateToProps = state => {
    return {}
  };
  
  const mapDispacthToProps = dispatch => {
    return {
        onAddUserReducerAction: user => {
        dispatch({
          type: "ADD_USER",
          newUser: user
        });
      }
    };
  };
  
  export default  withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(AddUser))