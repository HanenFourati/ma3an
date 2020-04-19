import React,{Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class AddVCall extends Component{
  constructor () {
    super()
    this.onAddVcall = this.onAddVcall.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddVcall = () => {
    axios.post(`/volunteer/${this.props.id}/addvcall`, this.state)
      .then(() => {
        this.props.onAddVcallReducerAction(this.state)
        console.log(this.state)
        this.props.history.push(`/volunteer/+${this.props.id}`)
        })
      .catch(err => {alert(err)})
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.setState({
        callcreatorid: this.props.id
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
              <label for="title"><b>عنوان المشروع</b></label> <br/><br/>
              <input type="text" placeholder="عنوان المشروع" name="title" required onChange={this.onChange}  style={inputsylt}/><br/><br/>
              <label for="requirement"><b> متطلبات المشروع</b></label><br/><br/>
              <input type="text" placeholder="متطلبات المشروع" name="requirement" required onChange={this.onChange}  style={inputsylt}/><br/><br/>
              <label for="ressources"><b>الموارد المتاحة</b></label><br/><br/>
              <input type="text" placeholder="الموارد المتاحة" name="ressources" required onChange={this.onChange}  style={inputsylt}/><br/><br/>
              <label for="category"><b>المجال</b></label><br/><br/>
              <select name="category" onChange={this.onChange} >
                  <option value="" selected disabled hidden>اختار المجال</option>
                  <option value="tailloring">الخياطة</option>
                  <option value="health">الصحة</option>
                  <option value="foodsupply">المواد_الغذائية</option>
                  <option value="distribution">التوزيع</option>
              </select> <br/> <br/> 
              <Link onClick={this.onAddVcall} to={`/volunteer/${this.props.id}/addvcall` }style={{textDecoration: "none", backgroundColor: "rgb(248, 167, 37)", color: "White", borderRadius: "5px", padding: "1%", border: "1px solid rgb(248, 167, 37)"}} > إنشاء المشروع</Link>
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
        onAddVcallReducerAction: vcall => {
        dispatch({
          type: "ADD_VCALLS",
          newVcall: vcall
        });
      }
    };
  };
  
  export default  withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(AddVCall))