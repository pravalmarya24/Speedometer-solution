// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img-size"
            alt="speedometer"
          />
          <h1 className="speed-heading">Speed is {count}mph</h1>
        </div>
        <p className="speed-para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="acc-btn" type="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="app-btn" type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
