import React from 'react'
import PropTypes from 'prop-types'

class Channel extends React.Component {
  onClick = (e) => {
    e.preventDefault()
    const { setChannel, channel } = this.props
    setChannel(channel)
  }

  render() {
    const { channel, activeChannel } = this.props
    const active = channel === activeChannel ? 'active': ''
    return (
      <li className={active}>
        <div onClick={this.onClick}>{channel.name}</div>
      </li>
    )
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object
}

export default Channel
