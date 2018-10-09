import React from 'react'
import {connect} from 'react-redux'
import {pizza, toppings} from '../actions/pizza'
import PizzaConfig from './PizzaConfig'
import {basePizza, sauce} from '../lib/pizzaData'


const dataForPrices = [...basePizza, ...sauce]

class PizzaConfigContainer extends React.PureComponent {
  onChange = (event) => {
    const errDiv = document.getElementById('errMsg')
    errDiv.innerHTML = ''
    const order = this.props.order
    if(Array.isArray(event)) {
        if(event.length > 3) {
          errDiv.innerHTML = 'you can only have a maximum of 3 toppings on your pizza'
        } else {
          const alreadyAdded = order.toppings.length
          this.props.toppings({
            toppings: [...event],
            price: event.length * 0.5 - alreadyAdded * 0.5
          })
        }
    } else if(typeof event === 'boolean') {
      if(event) {
        this.props.pizza({
          turboDroneDelivery: event,
          price: Math.round((order.price * 1.10) * 100) / 100
        })
      } else {
        this.props.pizza({
          turboDroneDelivery: event,
          price: Math.round((order.price / 1.10) * 100) / 100
        })
      }
    } else {
      const selected = dataForPrices.find(data => data.value === event.target.value)
      if(order[selected.name]) {
        const typeOfData = dataForPrices.filter(data => data.name === selected.name)
        const prevItem = typeOfData.find(item => item.value === order[selected.name])
        this.props.pizza({
          [selected.name]: selected.value,
          price: order.price - prevItem.price + selected.price
        })
      } else {
        this.props.pizza({
          [selected.name]: selected.value,
          price: order.price + selected.price
        })
      }
    }
  }

  onSubmit = (event) => {
  }

  render() {
    return (
          <PizzaConfig
            onChange={this.onChange}
            order={this.props.order}
          />
    )
  }
}

const mapStateToProps = ({order}) => ({order})

export default connect(mapStateToProps, {pizza, toppings})(PizzaConfigContainer)