import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type BrowsingHistory = {
  products: { id: string; category: string }[]
}

const initialSTate: BrowsingHistory = {
  products: [],
}

export const BrowsingHistoryStore = create<BrowsingHistory>()(
  persist(() => initialSTate, {
    name: 'browsingHistory',
  })
)

export default function useBrowsingHistory() {
  const { products } = BrowsingHistoryStore()
  return {
    products,
    addItem: (product: { id: string; category: string }) => {
      const index = products.findIndex((p) => p.id == product.id)
      if (index !== -1) products.splice(index, 1) //removes any duplicates if any
      products.unshift(product) //adds the product to the beginning of the array

      if (products.length > 10) products.pop() //removes the last product if the array length is greater than 10

      BrowsingHistoryStore.setState({
        products,
      })
    },

    clear: () => {
      BrowsingHistoryStore.setState({
        products: [],
      })
    },
  }
}
