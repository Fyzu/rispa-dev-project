import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// import Response from '@rispa/render-server/response'
import { array, bool, func, number, string } from 'prop-types'
import { replace } from '@rispa/redux'

const fetchSources = () => Promise.resolve([{ name: 'dsadas' }, { name: 'dasdasda' }, { name: 'test' }])

export default class About extends PureComponent {
  static propTypes = {
    test: string,
    test2: number,
    test3: bool,
    dadas32: array,
    replace: func,
  }

  static defaultProps = {
    replace: replace,
  }

  async componentDidMount() {
    await this.testFunction()
  }

  testFunction = async () => {
    const test = 'string'

    const items = await fetchSources()

    if (test.startsWith('dsadasd')) {
      this.setState({
        test: undefined,
      })
    } else {
      const item = items.find(({ name }) => name === test)

      this.setState({
        test: item,
      })
    }
  }

  render() {
    // const {  } = this.props

    return (
      <div>
        About
        <br/>
        <Link to='/'>
          Go to general page
        </Link>
      </div>
    )
  }
}
