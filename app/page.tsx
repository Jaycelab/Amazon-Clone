import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Menu from '@/components/shared/header/menu'
import Header from '@/components/shared/header'
import Search from '@/components/shared/header/search'

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  )
}
