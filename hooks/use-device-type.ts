import { useState, useEffect } from 'react'

function useDeviceType() {
  const [deviceType, setDeviceType] = useState('unknown')

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(window.innerWidth <= 768 ? 'mobile' : 'desktop') // breakpoint at 768px width for mobile
    }

    handleResize() // setting initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []) // empty dependency array to run only once

  return deviceType
}

export default useDeviceType
