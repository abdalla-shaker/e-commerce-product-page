import { createContext, useReducer } from "react";
import { IMAGES } from "../data.js";

export const CartItemsContext = createContext({
  addCartItem: () => {},
  removeCartItem: () => {},
  cartItems: {},
});

const cartShopping = (state, action) => {
  if (action.type === "add") {
    const cartItems = [...state.items];
    const itemIndex = action.payload.id;

    const itemData = Object.values(IMAGES).find(
      (prod) => prod.productID === itemIndex
    );

    const item = cartItems.find((item) => item.id === itemIndex);
    if (item) {
      return;
    } else {
      const productData = {
        prodTitle: itemData.title,
        prodPrice: itemData.price,
        prodID: itemData.productID,
        prodImage: itemData.preview_pictures[0].src,
        quantity: action.payload.quantity,
      };

      return {
        ...state,
        items: [
          {
            ...state.items,
            ...productData,
          },
        ],
      };
    }
  } else if (action.type === "remove") {
    const cartItems = [...state.items];
    const itemIndex = action.payload;

    const filteredCartItems = cartItems.filter(
      (item) => item.prodID !== itemIndex
    );

    return {
      ...state,
      items: filteredCartItems,
    };
  } else {
    return state;
  }
};

export default function CartShoppingContext({ children }) {
  const [cartShoppingState, cartShoppingDispatch] = useReducer(cartShopping, {
    items: [],
  });

  const addCartItem = (id, quantity) => {
    cartShoppingDispatch({
      type: "add",
      payload: {
        id,
        quantity,
      },
    });
  };

  const removeCartItem = (id) => {
    cartShoppingDispatch({
      type: "remove",
      payload: id,
    });
  };

  const ctxValue = {
    addCartItem: addCartItem,
    removeCartItem,
    cartItems: cartShoppingState.items,
  };

  return (
    <CartItemsContext.Provider value={ctxValue}>
      {children}
    </CartItemsContext.Provider>
  );
}
