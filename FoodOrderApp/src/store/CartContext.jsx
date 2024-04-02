import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const calculateTotalAmount = (items) => {
  return items.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);
};

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    let updatedTotalQuantity = state.totalQuantity;
    let updatedTotalAmount = state.totalAmount;

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    updatedTotalQuantity++;
    updatedTotalAmount = calculateTotalAmount(updatedItems);

    return {
      ...state,
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    let updatedTotalQuantity = state.totalQuantity;
    let updatedTotalAmount = state.totalAmount;

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    updatedTotalQuantity--;
    updatedTotalAmount = calculateTotalAmount(updatedItems);

    return {
      ...state,
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [], totalQuantity: 0, totalAmount: 0 };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalAmount: cart.totalAmount,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
