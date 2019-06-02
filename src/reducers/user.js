const user = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER': 
      return action.user
    case 'DELETE_USER':
      return state
    default:
      return {}
  }
}

export default user
