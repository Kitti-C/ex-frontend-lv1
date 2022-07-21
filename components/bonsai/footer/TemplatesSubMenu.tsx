import { useState } from 'react'
import { IoChevronDownSharp } from 'react-icons/io5'

interface Props {
  menu: string
  subMenu: string[]
}

function TemplatesSubMenu({ menu, subMenu }: Props) {
  const [openSubMenu, setOpenSubMenu] = useState(false)

  return (
    <div>
      <div
        className="bonsaiFooterLink"
        onClick={() => setOpenSubMenu(!openSubMenu)}
      >
        <h1>{menu}</h1>
        <IoChevronDownSharp className="text-gray-600 " />
      </div>

      <div className={`${!openSubMenu ? 'hidden' : 'block'} pl-3 my-0.5`}>
        {subMenu.map((item) => (
          <p key={item} className="bonsaiFooterLink my-0.5">
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default TemplatesSubMenu
