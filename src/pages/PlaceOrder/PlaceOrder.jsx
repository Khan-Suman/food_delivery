import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
<form className='placeorder'>
     <div className='placeorder-left'>
      <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
        <input type='text' placeholder='first name'/>
        <input type='text' placeholder='last name'/>
      </div>
      <input type='email' placeholder='email address'/>
      <input type='text' placeholder='street'/>
      <div className='multi-fields'>
        <input type='text' placeholder='city'/>
        <input type='text' placeholder='state'/>
      </div>
      <div className='multi-fields'>
        <input type='text' placeholder='zip code'/>
        <input type='text' placeholder='country'/>
      </div>
      <input type='text' placeholder='number' />
     </div>
     <div className='placeorder-right'>
     <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount() > 0 ? 2 : 0}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <b>Total</b>
            <b>₹{getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</b>
          </div>
        </div>
        <button className='checkout-btn'>PROCEED TO PAYMENT</button>
    </div>
    </form>
  )
}

export default PlaceOrder