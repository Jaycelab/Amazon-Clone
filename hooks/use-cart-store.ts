import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Cart, OrderItem } from '@/types'
import { calcDeliveryDateAndPrice } from '@/lib/actions/order.actions'

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: undefined,
  shippingPrice: undefined,
  totalPrice: 0,
  paymentMethod: undefined, // paypal, stripe, etc later
  deliveryDateIndex: undefined,
}

interface CartState {
  cart: Cart
  addItem: (item: OrderItem, quantity: number) => Promise<string>
}
{
  /*updateItem: (item: OrderItem, quantity: number) => Promise<void>
  removeItem: (item: OrderItem) => <void>*/
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: initialState,

      addItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart
        const existItem = items.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        ) // Check if the item already exists in the cart with the same product, color, and size

        if (existItem) {
          if (existItem.countInStock < quantity + existItem.quantity) {
            throw new Error('Sorry, this item is out of stock')
          }
        } else {
          if (item.countInStock < item.quantity) {
            throw new Error('Sorry, not enough items in stock')
          }
        } // nested if check to see if the item is in stock for both new and existing items

        const updatedCartItems = existItem
          ? items.map((x) =>
              x.product === item.product &&
              x.color === item.color &&
              x.size === item.size
                ? { ...existItem, quantity: existItem.quantity + quantity }
                : x
            )
          : [...items, { ...item, quantity }] // if the item exists, update the quantity, otherwise add the item to the cart

        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            ...(await calcDeliveryDateAndPrice({
              items: updatedCartItems, //updates shopping cart with set items and calculates delivery date and price along with updated Cart items (items, itemsPrice, taxPrice, shippingPrice, totalPrice)
            })),
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        return updatedCartItems.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        )?.clientId! // find the item product color and size and return the clientId
      },
      init: () => set({ cart: initialState }),
    }),
    {
      name: 'cart-store', //sets cart to initial state and set name to cart-store local storage
    }
  )
)

export default useCartStore
