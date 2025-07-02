export const addItem = (prodToAdd) => {
    return {
      type: 'cart/addItem',
      payload: prodToAdd
    };
  };

export const removeItem = (id) => {
  return {
    type: 'cart/removeItem',
    payload: id
  };
}
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { label, image, price, id } = action.payload;
  
        const newItem = { image, price, label, id };
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [id]: newItem
        };
      }

      case 'cart/removeItem': {
        const newCart = { ...cart };
        delete newCart[action.payload];
        return newCart
      }
      
      default: {
        return cart;
      }
    }
  };