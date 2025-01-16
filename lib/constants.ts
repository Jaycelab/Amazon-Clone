export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Amazon'
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || 'Work hard, have fun, make history'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'An Amazon clone website built with Next.js, Tailwind CSS, and MongoDB'
export const APP_AUTHOR = process.env.NEXT_PUBLIC_APP_AUTHOR || 'Jayce'
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)
export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
) // $35.00 minimum for free shipping
