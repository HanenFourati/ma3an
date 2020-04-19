import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Display = (props) =>
                                props.prodList.map((currentvcall, i) =>
                                <div style={{margin: "5%", padding: "2%", borderRight: "1px solid #108994"}}>
                                    <div style={{textAlign: "right"}}>
                                    <p>{currentvcall.callcreatorid} : صاحب المبادرة </p>
                                    <p>{currentvcall.title} : عنوان المبادرة </p>
                                    <p>{currentvcall.requirement} : متطلبات المشروع
                                    </p>
                                    <p>{currentvcall.ressources} : الموارد المتاحة</p>
                                    <div style={{float: "left"}}>
                                        <Link  style={{color: "#108994", textDecoration: "none", fontSize: "20px"}} onClick={() =>   axios.post(`/volunteer/${props.id}/${props.firstname}/${props.lastname}/${props.address}/${props.email}/${props.phone}/${props.skills}/volunteercalls/collaborate`,
                                          {
                                          callcreatorid:currentvcall.callcreatorid,
                                          collaboratorid:props.id,
                                          firstname:props.firstname,
                                          lastname:props.lastname,
                                          address:props.address,
                                          email:props.email,
                                          phone:props.phone,
                                          skills:props.skills}
                                         )
                                        .then(() => {
                                          })
                                        .catch(err => {alert(err)})
                                        }
                                        to={`/volunteer/${props.id}/${props.firstname}/${props.lastname}/${props.address}/${props.email}/${props.phone}/${props.skills}/volunteercalls/collaborate`}
                                        >تعاون</Link>
                                         &nbsp; &nbsp;
                                        <Link  style={{color: "#108994", textDecoration: "none", fontSize: "20px"}}  onClick={() =>   axios.post(`/volunteer/${props.id}/${props.firstname}/${props.lastname}/${props.address}/${props.email}/${props.phone}/${props.skills}/volunteercalls/supply`,
                                          {
                                          callcreatorid:currentvcall.callcreatorid,
                                          supplierid:props.id,
                                          firstname:props.firstname,
                                          lastname:props.lastname,
                                          address:props.address,
                                          email:props.email,
                                          phone:props.phone,
                                          skills:props.skills}
                                         )
                                        .then(() => {
                                          })
                                        .catch(err => {alert(err)})
                                        }
                                        to={`/volunteer/${props.id}/${props.firstname}/${props.lastname}/${props.address}/${props.email}/${props.phone}/${props.skills}/volunteercalls/supply`}
                                        >تزويد</Link>
                                    </div>
                               
                                    </div>
                                   </div>
                                )
class VolunteerCalls extends Component {
  constructor(props) {
    super(props)
    this.state = {
        val: '',
        listproducts:  []
      }
}
    componentDidMount(){ 
        axios.get(`/volunteer/${this.props.id}/${this.props.firstname}/${this.props.lastname}/${this.props.address}/${this.props.email}/${this.props.phone}/${this.props.skills}/volunteercalls`).then(res => {this.props.initproductsList(res.data)
          this.setState({
            listproducts:  this.props.ProductsTable
              })})
        .catch(error => {console.log(error)});
       } 
       filterproducts(val){
        this.setState({
          val: val
        })
      }

      getvisibleworker(){
        if (this.state.val==="")
        return this.state.listproducts
        else
        return this.state.listproducts.filter(
            el => el.category===this.state.val) 
       }
    render() {
        return (
        <div style={{backgroundColor:"#202020", color: "white" , padding: "3%"}}>
           <div style={{display: "flex", flexDirection: "row"}}>
               <div style={{padding: "2%", width: "30%"}}>
                  <div style={{borderRight: "2px solid rgb(248, 167, 37)"}}>
                       <button style={{backgroundColor: "#202020", fontSize: "25px", textDecoration: "underline", color: "white", border: "0px"}} onClick={() => this.filterproducts("")}>الكل#</button>
                       <button style={{backgroundColor: "#202020", fontSize: "25px", textDecoration: "underline", color: "white", border: "0px"}} onClick={() => this.filterproducts("tailloring")}> الخياطة# </button>
                       <button style={{backgroundColor: "#202020", fontSize: "25px", textDecoration: "underline", color: "white", border: "0px"}} onClick={() => this.filterproducts("health")}>الصحة</button>
                       <button style={{backgroundColor: "#202020", fontSize: "25px", textDecoration: "underline", color: "white", border: "0px"}} onClick={() => this.filterproducts("foodsupply")}>المواد_الغذائية#</button>
                       <button style={{backgroundColor: "#202020", fontSize: "25px", textDecoration: "underline", color: "white", border: "0px"}} onClick={() => this.filterproducts("distribution")}>التوزيع#</button>
                   </div>
               </div>
               <div  style={{width: "65%"}}>
                 <Display  prodList={this.getvisibleworker()} id={this.props.id} 
                                           firstname={this.props.firstname}
                                           lastname={this.props.lastname}
                                           address={this.props.address}
                                           email={this.props.email}
                                           phone={this.props.phone}
                                           skills={this.props.skills}/>
                 {/* {this.getvisibleproducts(ProductsTable,"All")} */}
               </div> 
            </div> 
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { ProductsTable : state.CallsReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initproductsList: vcalls => { 
    dispatch({
      type: "LOED_VCALLS",  
      vcalls
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerCalls)
