// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  clickEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  clickEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count"> {mangoCount} </span> mangoes
            <span className="count"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-details-cont">
            <div className="fruit-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.clickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.clickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
