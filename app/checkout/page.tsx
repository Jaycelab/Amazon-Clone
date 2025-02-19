import { auth } from '@/auth'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Checkout',
}

export default async function CheckoutPage() {
  const session = await auth()

  // Redirect to sign-in page if the user is not logged in
  if (!session?.user) {
    redirect('/sign-in?callbackUrl=/checkout')
  }
  return <div>Checkout Form</div>
}
