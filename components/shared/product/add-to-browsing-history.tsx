'use client'
import useBrowsingHistory from '@/hooks/use-browsing-history'
import { useEffect } from 'react'

export default function AddToBrowsingHistory({
  id,
  category,
}: {
  id: string
  category: string
}) {
  const { addItem } = useBrowsingHistory()
  useEffect(() => {
    //add item to browsing history when component mounts
    addItem({ id, category }) //add item to browsing history
  }, []) //run once when component mounts
  return null //no need to render anything
}
