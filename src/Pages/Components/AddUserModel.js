import React,{Component} from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import AddUser from './AddUser.js'
class AddUserModel extends Component{

  constructor () {
    super();
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
render(){
    return(
      <div>
            <Link onClick={this.handleOpenModal} style={{color: "#108994", textDecoration: "none", fontSize: "20px"}}>
              إنشاء حساب
            </Link>
            <Modal isOpen={this.state.showModal}>
               <button style={{backgroundColor: "white", color: "#202020", border: "none"}} onClick={this.handleCloseModal}>
                   <FaTimes/>
                </button>
              <AddUser/>
            </Modal>
     </div>
    )
}


}
export default AddUserModel