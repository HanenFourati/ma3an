function CallsReducer(state=[] , action){
    switch(action.type){
      // case "UPDATE_PROJECTS_LIST":
      //   return (state = action.projects)
      case "LOED_VCALLS":
        return (state = action.vcalls)
      case "ADD_VCALLS":
        return state.concat(action.newvcalls)
    //   case "ADD_USER":
    //     return state.concat(action.newUser)
      // case "EDIT_PROJECT":
      //   return state.map(
      //     e =>
      //       e._id === action.editedProject._id ? (e = action.editedProject) : e
      //   )
      // case "REMOVE_PROJECT":
      //   return state.filter(e => e._id !== action.id)
     default:  return state
    }
  } 
      
  export default  CallsReducer