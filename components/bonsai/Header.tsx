import { BiBuoy } from 'react-icons/bi'
import Link from 'next/Link'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'

type Props = {}

function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
        isScrolled && 'bg-white'
      } bonsaiHeader transition-all duration-300`}
    >
      <div className="flex w-[95%] lg:w-[80%] xl:w-[70%]  justify-between items-center space-x-1 transition-all duration-300">
        <div className=" text-emerald-500 cursor-pointer ">
          <Link href="/bonsai">
            <a className="font-semibold text-lg xl:text-2xl pb-1 flex justify-end items-center gap-1 hover:opacity-70 ">
              <BiBuoy className="h-8 w-8 xl:h-11 xl:w-11 " />
              Bonsai
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <p className="bonsaiHeaderLink">Product</p>
          <p className="bonsaiHeaderLink">Trmplates</p>
          <a className="bonsaiHeaderLink">Pricing</a>
          <a className="bonsaiHeaderLink">Reviews</a>
        </div>
        <div className="hidden lg:flex font-medium text-xs xl:text-base space-x-2">
          <button className="transition duration-300 text-emerald-500 border border-emerald-500 py-1 px-6 rounded-md hover:bg-emerald-500 hover:text-white">
            LOG IN
          </button>
          <button className="transition duration-300 text-white border border-emerald-500 bg-emerald-500 py-1 px-6 rounded-md hover:bg-emerald-600 hover:border-emerald-600">
            START FREE
          </button>
        </div>
        <div className="lg:hidden flex">
          <AiOutlineMenu className="text-gray-700 h-8 w-8 xl:h-11 xl:w-11 cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </header>
  )
}

export default Header
