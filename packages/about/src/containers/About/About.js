import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// import Response from '@rispa/render-server/response'
// import { string, number, bool, array, func, node } from 'prop-types'

export default class About extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    // const {  } = this.props

    return (
      <div>
        About
        <br />
        <Link to='/'>
          Go to general page
        </Link>
      </div>
    )
  }
}
