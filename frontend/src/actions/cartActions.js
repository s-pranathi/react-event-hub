import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CLEAR_CART } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/events/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      event: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })

  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  if(userInfoFromStorage){
    localStorage.setItem(userInfoFromStorage._id, JSON.stringify(getState().cart.cartItems))
  }
  else{
    localStorage.setItem('guestUser',JSON.stringify(getState().cart.cartItems))
  }
  
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  if(userInfoFromStorage){
    localStorage.setItem(userInfoFromStorage._id, JSON.stringify(getState().cart.cartItems))
  }
  else{
    localStorage.setItem('guestUser',JSON.stringify(getState().cart.cartItems))
  }
}

export const savePaymentMethod = (paymentMethod) => (dispatch)=>{
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: paymentMethod
  })

  localStorage.setItem('paymentMethod',JSON.stringify(paymentMethod))

}

export const clearCart = () => (dispatch) =>{
  dispatch({
    type: CLEAR_CART
  })
  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  if(userInfoFromStorage){
    localStorage.removeItem(userInfoFromStorage._id)
  }
  
  localStorage.removeItem('paymentMethod')
}