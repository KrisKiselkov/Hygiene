export const addItem = (prodToAdd, prodNum) => {
    return {
      type: 'cart/addItem',
      payload: {
        product: prodToAdd,
        quantity: prodNum
      }
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
        const { product, quantity } = action.payload;

        const { id, label, image, price } = product;

        const existingItem = cart[id]; // or cart[id]
        const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;
        const newItem = { id, label, image, price, quantity: newQuantity };

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