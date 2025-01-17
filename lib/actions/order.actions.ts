import { OrderItem } from '@/types'
import { round2 } from '../utils'
import { FREE_SHIPPING_MIN_PRICE } from '../constants'

export const calcDeliveryDateAndPrice = async ({
  items,
}: {
  deliveryDateIndex?: number
  items: OrderItem[]
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0) //reduce the items array to a single value
  ) // 1. Calculate the total price of all items

  const shippingPrice = itemsPrice > FREE_SHIPPING_MIN_PRICE ? 0 : 5 // 2. Calculate the shipping price
  const taxPrice = round2(itemsPrice * 0.15) // 3. Calculate the tax price
  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0) +
      (taxPrice ? round2(taxPrice) : 0)
  ) // 4. Calculate the total price and round tax and shipping price to 2 decimal places

  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  }
}
