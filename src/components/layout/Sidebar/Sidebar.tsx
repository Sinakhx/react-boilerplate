import { useState } from 'react'
import clsx from 'clsx'

import slugs from '@/routes/slugs'

import './Sidebar.scss'
import addIcon from '@/assets/icons/add.svg'
import { SideBarLink } from './SideBarLink'

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const handleSwitch = () => setIsOpen((prev) => !prev)

    const switchClass = isOpen ? '--open' : '--closed'

    return (
        <aside className={clsx('app-sidebar', switchClass)}>
            <img
                src={addIcon}
                alt='app-logo'
                className={clsx('app-logo', switchClass)}
            />
            <button
                className={clsx('switch-btn', switchClass)}
                onClick={handleSwitch}
            >
                <img src={addIcon} alt='menu' />
            </button>
            <SideBarLink
                isOpen={isOpen}
                icon={addIcon}
                slug={slugs.home}
                title='home page'
            />
            <SideBarLink
                isOpen={isOpen}
                icon={addIcon}
                slug={slugs.lastPage}
                title='last page'
            />
        </aside>
    )
}
