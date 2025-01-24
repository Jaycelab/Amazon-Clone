import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}

//PROMPT: Add a function toSlug that converts a string to a slug. A slug is a URL-friendly version of a string, where spaces are replaced with hyphens, and all characters are converted to lowercase. For example, the string "Hello, World!" would be converted to "hello-world".

export const toSlug = (text: string): string =>
  text
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]+/g, '') // Remove non-word characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  // Create a new instance of Intl.NumberFormat with the following options
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 2,
})

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US')
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number)
}

export const round2 = (num: number) =>
  Math.round((num * Number.EPSILON) * 100) / 100 //epsilon is used to avoid floating point errors

export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join('') //generates a random 24 digit number
