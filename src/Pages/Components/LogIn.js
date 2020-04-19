import React, { Component } from "react"
import { withRouter } from 'react-router'
import axios from "axios"
import  AddUserModel from './AddUserModel.js'
import './CSSFiles/LogIn.css'
class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: "", 
          password: "",
          userstable: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      componentDidMount(){ 
        axios.get('/volunteer').then(res =>
          this.setState({
            userstable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
       console.log(this.state)
       let error=document.getElementById("error_message")
       this.state.userstable.map((currentele)=> 
       (currentele.username===this.state.username && currentele.password===this.state.password) ? 
       this.props.history.push(`/volunteer/${currentele._id}`) : error.innerHTML="اسم المستخدم او كلمة السر غير صحيح" )
      }
    
      render() {
        return (
          <div className="Login-Style"> 
            <div className="Login-Form-Style">  
            <h1>تسجيل الدخول</h1>
              <input
                className="input-login-style"
                type="text"
                name="username"
                placeholder="اسم المستخدم"
                value={this.state.username}
                onChange={this.handleChange}
                required
              /> <br/>
    
              <input
                className="input-login-style"
                type="password"
                name="password"
                placeholder=" كلمة السر"
                value={this.state.password}
                onChange={this.handleChange}
                required
              /> <br/>
    
              <button onClick={this.handleSubmit} className="button-login-style" >دخول</button>
              <p id="error_message"></p>
              <AddUserModel />
            </div>
          </div>
        )
      }

}

export default withRouter(LogIn)
