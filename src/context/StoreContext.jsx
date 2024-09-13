
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId] : 1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId] : prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          // If the item does not exist in the cart or its quantity is already 0, return the previous state
          if (!prev[itemId] || prev[itemId] <= 0) {
            return prev;
          }
      
          // Create a new state object
          const newCartItems = { ...prev };
      
          // Decrease the quantity of the item
          newCartItems[itemId] -= 1;
      
          // If the quantity is zero, you may optionally remove the item from the cart entirely
          if (newCartItems[itemId] === 0) {
            delete newCartItems[itemId];
          }
      
          return newCartItems;
        });
      };

   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
   }
   const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
   }

    return (
        <StoreContext.Provider value={contextValue}>
           {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;