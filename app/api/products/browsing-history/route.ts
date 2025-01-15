import { NextRequest, NextResponse } from 'next/server'

import Product from '@/lib/db/models/product.model'
import { connectToDatabase } from '@/lib/db'

export const GET = async (request: NextRequest) => {
  // Connect to the database

  // Get the type, categories, and ids from the query
  const listType = request.nextUrl.searchParams.get('type') || 'history'
  const productIdsParam = request.nextUrl.searchParams.get('ids')
  const categoriesParam = request.nextUrl.searchParams.get('categories')

  if (!productIdsParam || !categoriesParam) {
    return NextResponse.json([]) //empty array is returned if no product ids or categories are found
  }

  const productIds = productIdsParam.split(',')
  const categories = categoriesParam.split(',')

  // Filter the products based on the type, categories, and ids. If the type is 'history', filter by the product ids. Otherwise, filter by the categories and exclude the product ids.
  const filter =
    listType === 'history'
      ? {
          _id: { $in: productIds },
        }
      : { category: { $in: categories }, _id: { $nin: productIds } }

  await connectToDatabase()
  const products = await Product.find(filter)
  // Sort the products based on the order of the product ids in the list if the type is 'history'. This ensures that the products are displayed in the order they were viewed. Sorts the products based on the order of the product ids in the list if the type is 'history' and returns the sorted products. Otherwise, returns the products as is.
  if (listType === 'history')
    return NextResponse.json(
      products.sort(
        (a, b) =>
          productIds.indexOf(a._id.toString()) -
          productIds.indexOf(b._id.toString())
      )
    )
  return NextResponse.json(products)
}
