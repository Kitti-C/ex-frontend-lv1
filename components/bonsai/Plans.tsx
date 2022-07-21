import Image from 'next/image'
import {
  IoCheckmarkOutline,
  IoChevronForward,
  IoChevronDownSharp,
} from 'react-icons/io5'
import { FaCircle } from 'react-icons/fa'

import { useState } from 'react'

type Props = {}

function Plans({}: Props) {
  const [monthly, setMonthly] = useState<boolean>(true)
  const monthlyPrice = [{ starter: '24', professional: '39', business: '79' }]
  const yearlyPrice = [{ starter: '17', professional: '32', business: '52' }]
  const planBusiness = [
    'Everything in Starter and Professional plus...',
    'Subcontractor Management',
    'Hiring Agreement Templates (1099 contracts)',
    'Subcontractor Onboarding',
    'Talent Pool',
    '3 Team Seats (additional seats $9/month)',
    'Accountant Access',
    'Connect Multiple Bank Accounts',
    'Unlimited Subcontractors',
    'Unlimited Project Collaborators',
  ]

  const AskedQuestions = (title: string, detail: string) => {
    const [openDetail, setOpenDetail] = useState(false)
    return (
      <div className="space-y-2">
        <li
          onClick={() => setOpenDetail(!openDetail)}
          className="bonsaiLiQuestion"
        >
          {title}
          <IoChevronDownSharp className="text-gray-400" />
        </li>
        <div className={`${!openDetail ? 'hidden' : 'block'} px-2`}>
          <p className="font-light text-base w-[95%] ">{detail}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative  flex flex-col  space-y-10 pb-24 text-gray-700">
      <div className="flex drop-shadow-sm relative w-full items-end h-20 md:h-40 justify-between md:justify-center md:space-x-16">
        <div className="text-xl md:text-3xl xl:text-5xl font-medium absolute top-0 left-0 md:relative ">
          <p> Plans & Pricing</p>
        </div>

        <div className="flex space-x-5 items-center absolute bottom-0 right-3 md:relative ">
          <p className={`${monthly ? '' : 'opacity-60'} font-medium`}>
            MONTHLY
          </p>
          <button
            onClick={() => setMonthly(!monthly)}
            className="rounded-full bg-emerald-500 h-7 w-14 z-40 items-center transition duration-300"
          >
            <FaCircle
              className={`relative left-1 text-white scale-125  ${
                monthly ? 'translate-x-1' : 'translate-x-7'
              } transition duration-300`}
            />
          </button>
          <p className={`${!monthly ? '' : 'opacity-60'} font-medium`}>
            YEARLY
          </p>
          <div className="absolute -top-9 -right-5 ">
            <Image
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"
              width={140}
              height={50}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-6">
        <div className="flex flex-col border border-gray-300 bg-white shadow  rounded-md mt-8 px-4  xl:px-10 py-16  ">
          <div className="space-y-8 mb-8">
            <div className="space-y-2 h-32 w-[85%] ">
              <h1 className="text-2xl font-medium">Starter</h1>
              <p className="font-light text-sm">
                Ideal for freelancers and contractors just starting out.
              </p>
            </div>

            <div className="border-b-2 border-b-emerald-500 ">
              <p className="text-6xl relative px-8 ">
                <span className="text-2xl px-2 absolute top-0 left-0">$</span>
                {monthly ? monthlyPrice[0].starter : yearlyPrice[0].starter}
                <span className="px-2 text-2xl">/ MONTH</span>
              </p>
              {!monthly && <p className="text-right">Billed yearly</p>}
            </div>

            <div className="">
              <ul className="space-y-4 text-sm xl:text-base">
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  All Templates
                </li>

                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Unlimited Clients & Projects
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Invoicing & Payments
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Proposals & Contracts
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Tasks & Time Tracking
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Client CRM
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Expense Tracking
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />
                  Up to 5 Project Collaborators
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-auto">
            <button className=" w-full py-3 border border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600 rounded-md text-white font-semibold">
              START FREE
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden flex flex-col  border border-gray-300 bg-white shadow  rounded-md mt-8 px-4 xl:px-10 py-16 ">
          <div className="space-y-8 mb-8">
            <div className="space-y-2 h-32  w-[85%]">
              <h1 className="text-2xl font-medium">Professional</h1>
              <p className="font-light text-sm">
                Everything a growing independent business needs to thrive.
              </p>
            </div>
            <div className="border-b-2 border-b-emerald-500">
              <p className="text-6xl relative px-8 ">
                <span className="text-2xl px-2 absolute top-0 left-0">$</span>{' '}
                {monthly
                  ? monthlyPrice[0].professional
                  : yearlyPrice[0].professional}
                <span className="px-2 text-2xl">/ MONTH</span>
              </p>
              {!monthly && <p className="text-right">Billed yearly</p>}
            </div>
            <div>
              <ul className="space-y-4 text-sm xl:text-base">
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Everything in Starter plus...
                </li>

                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Custom Branding
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Forms & Questionnaires
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Workflow Automations
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Client Portal
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Calendly Integration
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" />{' '}
                  Zapier Integration
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkOutline className="text-emerald-500 h-5 w-5" /> Up
                  to 15 Project Collaborators
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-auto">
            <button className=" w-full py-3 border border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600 rounded-md text-white font-semibold">
              START FREE
            </button>
          </div>

          <div className="absolute text-sm font-medium text-white flex h-11 w-80 top-4 -right-24 bg-emerald-500 items-center justify-center rotate-[40deg] pl-6 pt-0.5">
            MOST POPULAR
          </div>
        </div>
        <div className="relative flex flex-col  border border-gray-300 bg-white shadow  rounded-md mt-8 px-4 xl:px-10 py-16 ">
          <div className="space-y-8 mb-8">
            <div className="space-y-2 h-32  w-[85%]">
              <h1 className="text-2xl font-medium">Business</h1>
              <p className="font-light text-sm">
                The perfect package for small businesses and agencies.
              </p>
            </div>

            <div className="border-b-2 border-b-emerald-500">
              <p className="text-6xl relative px-8 ">
                <span className="text-2xl px-2 absolute top-0 left-0">$</span>
                {monthly ? monthlyPrice[0].business : yearlyPrice[0].business}
                <span className="px-2 text-2xl">/ MONTH</span>
              </p>
              {!monthly && <p className="text-right">Billed yearly</p>}
            </div>

            <div>
              <ul className="space-y-4 text-sm xl:text-base">
                {planBusiness.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <IoCheckmarkOutline className="text-emerald-500 h-5 w-5 flex-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-auto">
            <button className="w-full py-3 border border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600 rounded-md text-white font-semibold">
              START FREE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 pt-24 pb-12">
        <div className="pb-8">
          <h1 className="text-xl md:text-3xl font-medium">
            {monthly
              ? 'Super charge your work with add-ons'
              : 'Customize your workflow with add-ons'}
          </h1>
        </div>
        <div className="shadow-md w-full border border-gray-50 bg-white rounded-md">
          {monthly ? (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Collaborators</h1>
                <p className="font-light">
                  Invite other users to specific projects for limited access and
                  functionality.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-2xl font-medium">Free</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Bonsai Tax</h1>
                <p className="font-light">
                  Track expenses, identify write-offs, and estimate quarterly
                  taxes easily.
                </p>
                <div className="ml-0.5 text-emerald-500 text-sm flex w-[95px] hover:w-[100px] items-center py-1 space-x-0.5  cursor-pointer hover:opacity-70 justify-between transition-all duration-300 ease-out">
                  <p className="text-xs">LEARN MORE</p>
                  <IoChevronForward className="h-3 w-3" />
                </div>
              </div>
              <div className="flex flex-col items-center pt-2">
                <p className="text-3xl font-medium">$100</p>
                <p className="text-sm  font-base">/YEAR</p>
              </div>
            </div>
          )}
        </div>

        <div className="shadow-md w-full border border-gray-50 bg-white rounded-md">
          {monthly ? (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Partners</h1>
                <p className="font-light">
                  Invite other users for full account access and company
                  management.
                </p>
              </div>
              <div className="flex flex-col items-center pt-2">
                <p className="text-3xl font-medium">$9</p>
                <p className="text-sm font-base">/MONTH</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Partners</h1>
                <p className="font-light">
                  Invite other users for full account access and company
                  management.
                </p>
              </div>
              <div className="flex flex-col items-center pt-2">
                <p className="text-3xl font-medium">$90</p>
                <p className="text-sm font-base">/YEAR</p>
              </div>
            </div>
          )}
        </div>

        <div className="shadow-md w-full border border-gray-50 bg-white rounded-md">
          {monthly ? (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Bonsai Tax</h1>
                <p className="font-light">
                  Track expenses, identify write-offs, and estimate quarterly
                  taxes easily.
                </p>
                <div className="ml-0.5 text-emerald-500 text-sm flex w-[95px] hover:w-[100px] items-center py-1 space-x-0.5  cursor-pointer hover:opacity-70 justify-between transition-all duration-300 ease-out">
                  <p className="text-xs">LEARN MORE</p>
                  <IoChevronForward className="h-3 w-3" />
                </div>
              </div>
              <div className="flex flex-col items-center pt-2">
                <p className="text-3xl font-medium">$10</p>
                <p className="text-sm  font-base">/MONTH</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between px-10 py-10">
              <div className="pr-8 space-y-2">
                <h1 className="text-xl font-medium">Collaborators</h1>
                <p className="font-light">
                  Invite other users to specific projects for limited access and
                  functionality.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-2xl font-medium">Free</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-1 md:mx-24 space-y-28 ">
        <div className="flex flex-wrap bg-[#f2faff] rounded-md  justify-between items-center px-16  py-20">
          <div className="mb-5 md:mb-0">
            <p className="font-medium text-xl md:text-3xl">
              It’s <span className="text-emerald-500">your</span> business.{' '}
              <br /> We’re here to help it grow.
            </p>
          </div>
          <div>
            <button className="bg-emerald-500 hover:opacity-70 rounded-md px-8 py-4 text-white font-medium">
              START FREE
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8 px-6 md:px-28 font-medium">
          <p className="text-emerald-500 text-xl md:text-3xl ">
            Frequently Asked Questions
          </p>

          <ul className="text-lg md:text-2xl space-y-6 w-full">
            {AskedQuestions(
              'How does the free trial work?',
              ` When you start your trial with Bonsai you'll receive full,
                unlimited access to all of Bonsai's Workflow or Workflow Plus
                Features! You will need to enter your credit card information to
                begin your trial, but don't worry - we won't charge you anything
                until the subscription ends! If you wish to cancel at any time
                during the trial period, you can do so through your
                Subscriptions Settings Page.`
            )}
            {AskedQuestions(
              'Can I change plans anytime?',
              ` Yes, you can from within your account. If you have already
                subscribed to a plan, or want to downgrade or upgrade your
                current one, you can do this by going to your "Settings" and
                "Subscription".`
            )}
            {AskedQuestions(
              'How do I pause my Bonsai subscription?',
              ` We totally understand that with the nature of freelancing, work
                ebbs and flows so you might not always need your Bonsai
                subscription to remain active! The good news is that you can
                cancel or pause your monthly subscription at any time without
                penalty. Once cancelled, you'll be able to continue logging in
                to access all your documents and even continue to use our free
                features, like Time Tracking! In order to cancel your
                subscription, login to your Bonsai account.`
            )}
            {AskedQuestions(
              'What is your refund policy?',
              ` If you contact us within 2 weeks of being charged for your
                subscription, we will be happy to issue a refund for you!Beyond
                those 2 weeks, you will need to cancel or modify the
                subscription from the Subscriptions Tab in Settings to avoid
                future charges, but refunds will not be issued. This applies to
                both monthly and annual plans.`
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Plans
