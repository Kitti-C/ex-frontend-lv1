import { BiBuoy } from 'react-icons/bi'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useLayoutEffect, useState } from 'react'
import {
  IoCheckmarkOutline,
  IoChevronForward,
  IoChevronDownSharp,
  IoCloseOutline,
} from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons'

type Props = {}

function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [openWorkFlow, setOpenWorkFlow] = useState(false)
  const [templateSubMenuName, setTemplateSubMenuName] =
    useState<string>('Contract Templates')
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openProduct, setOpenProduct] = useState<boolean>(false)
  const [openTemplate, setOpenTemplate] = useState<boolean>(false)

  const templatesSubMenu = [
    'Contract Templates',
    'Proposal Templates',
    'Invoice Templates',
    'Agreement Templates',
    'Quote Templates',
    'Scope of Work Templates',
    'Brief Templates',
  ]
  const fratureTemplatesSubMenu = {
    Contracts: [
      'Free Contract Maker',
      'Social Media Management Contract Template',
      'Graphic Design Contract Template',
      'Digital Marketing Contract Template',
    ],
    Proposals: [
      'Graphic Design Proposal Template',
      'Business Proposal Template',
      'Brand Ambassador Proposal Template',
      'Data Entry Proposal Letter Template',
    ],
    Invoice: [
      'Influencer Agreement Template',
      'Influencer Collaboration Agreement Template',
      'Monthly Retainer Agreement Template',
      'Writer Agreement Template',
    ],
  }

  const [fratureTemplates, setFratureTemplates] = useState<[] | any>(
    fratureTemplatesSubMenu.Contracts
  )

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

  function WorkFlow(title: string, detail: string, Icon: IconType) {
    return (
      <div className="cursor-pointer h-28 py-4 px-4 space-y-1 rounded-lg hover:bg-gray-50 transition-colors duration-300">
        <div className="flex items-center space-x-2">
          <p>
            <Icon />
          </p>
          <p>{title}</p>
        </div>
        <p className="text-xs text-gray-600 pl-6">{detail}</p>
      </div>
    )
  }

  function TemplatesSubMenu(title: string, Icon: IconType) {
    return (
      <div
        onMouseMove={() => {
          setTemplateSubMenuName(title)
          switch (title) {
            case 'Contract Templates':
              setFratureTemplates(fratureTemplatesSubMenu.Contracts)

              break

            case 'Proposal Templates':
              setFratureTemplates(fratureTemplatesSubMenu.Proposals)

              break

            case 'Invoice Templates':
              setFratureTemplates(fratureTemplatesSubMenu.Invoice)

              break

            default:
              setFratureTemplates(fratureTemplatesSubMenu.Proposals)
              break
          }
        }}
        className="flex pl-8 items-center  cursor-pointer p-4 hover:bg-gray-50  transition-all duration-300 justify-between"
      >
        <p className="text-sm">{title}</p>
        <Icon className={` text-gray-400 w-6 h-6`} />
      </div>
    )
  }

  function FratureTemplateSubMenu(data: []) {
    return (
      <div className="flex flex-col space-y-4 ">
        {data.map((value, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-lg p-6 text-center hover:scale-110 cursor-pointer transition-all duration-200 overflow-hidden"
          >
            <p className="text-sm "> {value}</p>

            <div className="absolute -z-10 rounded-3xl -rotate-[50deg] h-40 w-20 -left-16 -top-20 bg-yellow-50"></div>
            <div className="absolute -z-10 rounded-3xl rotate-[55deg] h-40 w-40 -right-16 -top-32 bg-blue-50"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <header
      className={`${
        isScrolled && 'bg-white'
      } bonsaiHeader transition-all duration-300 `}
    >
      <div className=" flex  w-[95%] lg:w-[80%] xl:w-[73%]  justify-between items-center space-x-1 transition-all duration-300">
        <div className=" text-emerald-500 cursor-pointer ">
          <Link href="/bonsai">
            <a className="font-semibold text-lg xl:text-2xl pb-1 flex justify-end items-center gap-1 hover:opacity-70 ">
              <BiBuoy className="h-8 w-8 xl:h-11 xl:w-11 " />
              Bonsai
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <div className="relative group  ">
            <p
              onMouseLeave={() => setOpenWorkFlow(false)}
              className="bonsaiHeaderLink"
            >
              Product
              <IoChevronDownSharp className="text-gray-400" />
            </p>
            <div
              className={`absolute ${
                openWorkFlow && 'w-[100vh]'
              } hidden group-hover:flex justify-between  transition-all duration-300 border shadow-sm  top-12 -left-44 rounded-lg bg-white z-10 `}
            >
              <div className="flex-none w-[35vh]">
                <div
                  onMouseMove={() => setOpenWorkFlow(true)}
                  onMouseLeave={() => setOpenWorkFlow(false)}
                  className="relative  cursor-pointer group px-8 pt-8 hover:bg-gray-50 rounded-t-lg transition-all duration-300 "
                >
                  <div className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-lg"> Bonsai Workflow</p>
                      <p className="text-gray-600">
                        Look professional, win more clients and manage your
                        business from one place
                      </p>
                    </div>

                    <IoChevronForward
                      className={`${
                        !openWorkFlow && 'hidden'
                      } absolute right-2 mt-4 transition duration-300 text-gray-400 w-6 h-6`}
                    />
                  </div>

                  <div className="w-full border-b border-gray-100 group-hover:border-white transition-all duration-300 py-4 "></div>
                </div>
                <div className="cursor-pointer group px-10 pt-8 hover:bg-gray-50 transition-all duration-300">
                  <div className="space-y-1">
                    <p className="text-lg"> Bonsai Tax</p>
                    <p className="text-gray-600">
                      Track expenses, maximize tax write-offs, and estimate
                      taxes without the headache
                    </p>
                  </div>

                  <div className="w-full border-b border-gray-100 group-hover:border-white transition-all duration-300 py-4 "></div>
                </div>
                <div className="cursor-pointer px-10 pt-8 pb-3 hover:bg-gray-50 rounded-b-lg transition-all duration-300">
                  <div className="space-y-1">
                    <p className="text-lg"> Bonsai Cash</p>
                    <p className="text-gray-600">
                      Bonsai’s all-in-one financial hub: No fees and lightning
                      fast payouts
                    </p>
                  </div>

                  <div className="w-full  py-4"></div>
                </div>
              </div>
              <div
                onMouseMove={() => setOpenWorkFlow(true)}
                onMouseLeave={() => setOpenWorkFlow(false)}
                className={`${
                  !openWorkFlow && 'hidden'
                } grid grid-cols-2 gap-4 px-4  transition-all duration-300`}
              >
                <div className="py-4 flex flex-col justify-between  ">
                  {WorkFlow(
                    'Invoices',
                    'Get paid faster with automatic invoicing, online payments and more',
                    IoChevronForward
                  )}
                  {WorkFlow(
                    'Proposals',
                    'Create client-winning proposals with open receipts, custom packages and electronic approvals',
                    IoChevronForward
                  )}
                  {WorkFlow(
                    'Contracts',
                    'Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.',
                    IoChevronForward
                  )}{' '}
                  {WorkFlow(
                    'Client CRM',
                    'Add leads, manage existing clients and track projects easily from one place',
                    IoChevronForward
                  )}{' '}
                </div>
                <div className="py-4 flex flex-col justify-between  ">
                  {WorkFlow(
                    'Forms & Automations',
                    'Boost client intake and automate feedback with custom web forms and questionnaires',
                    IoChevronForward
                  )}
                  {WorkFlow(
                    'Time Tracking',
                    'Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system',
                    IoChevronForward
                  )}
                  {WorkFlow(
                    'Accounting',
                    'Manage your finances easily with income reports, expense tracking, tax reminders and more',
                    IoChevronForward
                  )}
                  {WorkFlow(
                    'Task Tracking',
                    'Stress-free task management with project templates and integrated timesheets',
                    IoChevronForward
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <p className="bonsaiHeaderLink">
              Trmplates
              <IoChevronDownSharp className="text-gray-400" />
            </p>
            <div className="absolute border shadow-sm hidden group-hover:grid grid-cols-3  min-w-[800px] bg-white rounded-lg z-10 top-12 -left-48">
              <div className="py-4 col-span-1">
                {templatesSubMenu.map((item) => (
                  <div key={item}>
                    {TemplatesSubMenu(item, IoChevronForward)}
                  </div>
                ))}
              </div>
              <div className="pt-7 pb-8 col-span-2 px-14 space-y-5">
                <p className="text-lg">Featured {templateSubMenuName}</p>
                <div className="">
                  {FratureTemplateSubMenu(fratureTemplates)}
                </div>

                <div className="">
                  <p className=" text-center text-emerald-500 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
                    See All Templates
                  </p>
                </div>
              </div>
            </div>
          </div>

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
          <AiOutlineMenu
            onClick={() => {
              setOpenMenu(!openMenu)
              setOpenProduct(false)
              setOpenTemplate(false)
            }}
            className="text-gray-700 h-8 w-8 xl:h-11 xl:w-11 cursor-pointer hover:rotate-180 hover:opacity-70 transition-all duration-500 ease-out"
          />
        </div>
      </div>
      <div
        className={`${
          !openMenu ? 'w-0' : 'w-full  '
        } absolute flex justify-center py-2 top-0 -right-0 bg-white h-screen  transition-all duration-300 ease-out lg:hidden `}
      >
        <div className=" flex flex-col w-[97%]  space-x-1 transition-all duration-300 ">
          <div className="flex justify-between w-full pb-20">
            <div className=" text-emerald-500 cursor-pointer ">
              <Link href="/bonsai">
                <a className="font-semibold text-lg xl:text-2xl pb-1 flex justify-end items-center gap-1 hover:opacity-70 ">
                  <BiBuoy className="h-12 w-12  " />
                </a>
              </Link>
            </div>
            <div>
              <IoCloseOutline
                onClick={() => {
                  setOpenMenu(!openMenu)
                  setOpenProduct(false)
                  setOpenTemplate(false)
                }}
                className="text-gray-700 h-11 w-11  cursor-pointer  hover:opacity-70 transition-all duration-500 ease-out"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-gray-600 pb-10">
            <div className="flex flex-col border-b border-gray-300 cursor-pointer pb-2 px-1 hover:text-gray-900">
              <div
                onClick={() => setOpenProduct(!openProduct)}
                className="flex justify-between items-center w-full"
              >
                <p>Product</p>
                <IoChevronDownSharp className="h-5 w-5" />
              </div>
              <div
                className={`${
                  !openProduct ? 'h-0 opacity-0 -z-10' : 'h-64'
                } transition-all duration-500 ease-in-out mt-2 `}
              >
                <div className="px-2 py-4 rounded space-y-2 hover:bg-gray-50 transition duration-300">
                  <p>BonsaiWorkflow</p>
                  <p className="text-xs">
                    Orgabize your business & look profressional
                  </p>
                </div>
                <div className="px-2 py-4 rounded space-y-2 hover:bg-gray-50 transition duration-300">
                  <p>Bonsai Tax</p>
                  <p className="text-xs">
                    Maximize write-offs, and estimate and save for 1099 taxes
                  </p>
                </div>
                <div className="px-2 py-4 rounded space-y-2 hover:bg-gray-50 transition duration-300">
                  <p>Bonsai Cash</p>
                  <p className="text-xs">
                    Manage your money with a no-fee business account
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 cursor-pointer pb-2 px-1 hover:text-gray-900">
              <div
                onClick={() => setOpenTemplate(!openTemplate)}
                className="flex justify-between items-center w-full"
              >
                <p>Templates</p>
                <IoChevronDownSharp className="h-5 w-5" />
              </div>
              <div
                className={`${
                  !openTemplate ? 'h-0 opacity-0 -z-10' : 'h-[42vh]'
                } transition-all duration-500 ease-in-out mt-2 space-y-1`}
              >
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Contract Templates</p>
                </div>
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Proposal Templates</p>
                </div>{' '}
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Invoice Templates</p>
                </div>{' '}
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Agreement Templates</p>
                </div>{' '}
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Quote Templates</p>
                </div>{' '}
                <div className="flex items-center gap-2  px-2 py-4 rounded  hover:bg-gray-50 transition duration-300">
                  <IoChevronForward className="" />
                  <p className="">Scope of Work Templates</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 cursor-pointer pb-4 px-1 hover:text-gray-900">
              <div className="flex justify-between items-center w-full">
                <p>Pricing</p>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 cursor-pointer pb-4 px-1 hover:text-gray-900">
              <div className="flex justify-between items-center w-full">
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <button className="border border-emerald-500 rounded-md py-3 text-emerald-500 text-sm transition duration-300 hover:bg-emerald-500 hover:text-white">
              LOG IN
            </button>
            <button className="border border-emerald-500 bg-emerald-500 rounded-md py-3 text-white text-sm hover:opacity-70 transition duration-300">
              START FREE
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
