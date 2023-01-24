import React, { Component } from 'react'

export class Order extends Component {
  render() {
      return (
        <div className="orders">
            <img src={'./images/' + this.props.order.img} />
            <div className='orderdiv'>
              <p className='title'>{this.props.order.title}</p>
              <p className='price'>{this.props.order.price}$</p>
            </div>
        </div>
      )
    }
}
export default Order