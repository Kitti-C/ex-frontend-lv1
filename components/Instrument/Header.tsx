import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        isScrolled ? '-translate-y-96' : 'translate-y-0'
      } fixed top-0 left-0 w-full flex justify-between items-center px-20 py-10 bg-black text-white transition-transform duration-300 ease-in-out`}
    >
      <div>
        <p className="text-2xl font-semibold">Instrument</p>
      </div>
      <div className="flex space-x-16 text-sm">
        <p>[ WHAT WE DO ]</p>
        <p>WHO EW ARE</p>
        <p>BEING JERE</p>
        <p>CAREERS</p>
      </div>
    </header>
  )
}

export default Header
