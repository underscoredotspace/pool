import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Ball from './components/Ball'

class PoolTable extends React.Component {
  render() {
    return (
      <Fragment>
        <Ball x={10} y={20} player="stripe" ball={7} />
      </Fragment>
    )
  }
}

ReactDOM.render(<PoolTable />, document.getElementById('root'))
