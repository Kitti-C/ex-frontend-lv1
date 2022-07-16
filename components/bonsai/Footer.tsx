import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bonsaiFooter bg-white text-gray-700 pb-24">
      <div className="flex flex-col md:flex-row w-[95%] lg:w-[80%] xl:w-[70%] justify-between transition-all  duration-300">
        <div className="space-y-8 mt-12">
          <div className="space-y-10">
            <h1 className="font-medium">PRODUCT</h1>
            <ul className="font-light space-y-0.5">
              <li className="bonsaiFooterLink">Proposals</li>
              <li className="bonsaiFooterLink">Contracts</li>
              <li className="bonsaiFooterLink">Invoicing</li>
              <li className="bonsaiFooterLink">Client CRM</li>
              <li className="bonsaiFooterLink">Forms</li>
              <li className="bonsaiFooterLink">Accounting</li>
              <li className="bonsaiFooterLink">Bonsai Tax</li>
              <li className="bonsaiFooterLink">Bonsai Cash</li>
            </ul>
          </div>
          <div className="font-light space-y-1.5">
            <p className="text-emerald-500">Pricing</p>

            <ul>
              <li className="bonsaiFooterLink">Bonsai Reviews</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 mt-12">
          <div className="space-y-10">
            <h1 className="font-medium">FREE RESOURCES</h1>
            <div className="space-y-4 font-light">
              <ul className="space-y-0.5">
                <li className="bonsaiFooterLink">Freelance Resources</li>
                <li className="bonsaiFooterLink">Freelance Blog by Bonsai</li>
                <li className="bonsaiFooterLink">How to Write a Contract</li>
                <li className="bonsaiFooterLink">Online Signature Maker</li>
              </ul>
              <ul className="space-y-0.5">
                <li className="bonsaiFooterLink">Self-Employed Taxes Hub</li>
                <li className="bonsaiFooterLink">
                  Self-Employed Tax Calculator
                </li>
                <li className="bonsaiFooterLink">
                  Self-Employed Tax Deductions
                </li>
              </ul>
            </div>
          </div>
          <div className="font-light space-y-1.5">
            <p className="font-medium">Templates</p>
            <ul className="space-y-0.5">
              <li className="bonsaiFooterLink">Invoice Templates</li>
              <li className="bonsaiFooterLink">Proposal Templates</li>
              <li className="bonsaiFooterLink">Contract Templates</li>
              <li className="bonsaiFooterLink">Agreement Templates</li>
              <li className="bonsaiFooterLink">Scope of Work Templates</li>
              <li className="bonsaiFooterLink">Quote Templates</li>
              <li className="bonsaiFooterLink">Credit Note Templates</li>
              <li className="bonsaiFooterLink">Estimate Templates</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8 mt-12">
          <div className="space-y-10">
            <h1 className="font-medium">BONSAI</h1>
            <div className="space-y-8 font-light">
              <ul className="space-y-0.5">
                <li className="bonsaiFooterLink">About</li>
                <li className="bonsaiFooterLink">Careers</li>
                <li className="bonsaiFooterLink">Support</li>
                <li className="bonsaiFooterLink">LinkedIn</li>
                <li className="bonsaiFooterLink">Twitter</li>
                <li className="bonsaiFooterLink">Privacy policy</li>
                <li className="bonsaiFooterLink">Legal</li>
              </ul>
              <ul className="space-y-0.5">
                <li className="bonsaiFooterLink">Affiliates</li>
                <li className="bonsaiFooterLink">Write for Us</li>
              </ul>

              <ul>
                <li className="bonsaiFooterLink">Comparisons</li>
              </ul>

              <div className="group">
                <span className="font-bold text-gray-700">Admission</span>
                <div className=" hidden group-hover:block  bg-white  w-auto">
                  <div className="p-3 hover:bg-gray-200 ">
                    Admission Process
                  </div>
                  <div className="p-3 hover:bg-gray-200">option 1</div>
                  <div className="p-3 hover:bg-gray-200">option 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
