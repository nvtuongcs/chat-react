import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserForm from './UserForm.js'
import UserList from './UserList.js'

class UserSection extends Component {

  render() {
    return (
      <div className='support panel panel-primary'>
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }

}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  setUserName: PropTypes.func.isRequired
}

export default UserSection
