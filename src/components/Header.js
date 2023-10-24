import React, { useState } from 'react'
import Order from './Order';
const showOrders = (props) => {
  return(
    <div>
      {props.orders.map(el => (
         <Order key={el.id} order={el}/>
      ))}
  </div>
  )
}
const showNothing = () => {
  return(
    <div>
      <h1>Cart is empty</h1>
    </div>
  )
}
export default function Header(props) {
  let [active, setCartOpen] = useState(false);
  return (
      <header>
        <div className='menu'>
          <img src='./images/shopping-logo-svgrepo-com.svg'/>
          <span>Shop</span>
          <ul>
            <li onClick={() => setCartOpen(active = !active)} className={`cart ${active && 'active'}`}></li>
            {active && (
              <div className='cart-opened'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
            )}
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>
        </div>
        <div className='header-img'>
          <div>
            <span>Best Home Products</span>
          </div>
        </div>
      </header>
  )
}
