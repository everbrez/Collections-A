import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteUser } from '../../actions'

function Logout(props) {
  const { history } = props
  fetch('http://localhost:8888/logout', {
    credentials: 'include',
    mode: 'cors',
  })
  .then(res => res.json())
  .then(data => {
    if(data.error) throw new Error(data.error)

    history.push('/')
  })
  .catch(err => {
    console.log(err.message)
  })

  return null
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteUser())
})

export default connect(null, mapDispatchToProps)(withRouter(Logout))
