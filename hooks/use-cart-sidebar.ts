import { usePathname } from 'next/navigation'
import useDeviceType from './use-device-type'
import useCartStore from './use-cart-store'

// This hook is used to show/hide the cart sidebar based on the device type and the current path.
const isNotInPaths = (s: string) =>
  !/^\$|^\cart$|^\/checkout$|^\/sign-in$|^\/sign-up$|^\/order(\/.*)?$|^\/account(\/.*)?$|^\/admin(^\/.*)?$/.test(
    s
  )

function useCartSidebar() {
  const {
    cart: { items },
  } = useCartStore()

  const deviceType = useDeviceType()
  const currentPath = usePathname()

  return (
    items.length > 0 && deviceType === 'desktop' && isNotInPaths(currentPath)
  )
}

export default useCartSidebar
