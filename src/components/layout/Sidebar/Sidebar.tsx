import { useState, useCallback } from 'react'
import slugs from '@/routes/slugs'
import addIcon from '@/assets/icons/add.svg'
import { SideBarLink } from './SideBarLink'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    // Memoized toggle handler
    const handleToggle = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    // Determine CSS classes based on sidebar state
    const sidebarClass = isOpen ? styles.open : styles.closed
    const logoClass = isOpen ? styles.logoOpen : styles.logoClosed
    const switchBtnClass = isOpen
        ? styles.switchBtnOpen
        : styles.switchBtnClosed

    return (
        <aside className={`${styles.sidebar} ${sidebarClass}`}>
            <img
                src={addIcon}
                alt='app-logo'
                className={`${styles.logo} ${logoClass}`}
            />
            <button
                className={`${styles.switchBtn} ${switchBtnClass}`}
                onClick={handleToggle}
                aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
                aria-expanded={isOpen}
            >
                <img src={addIcon} alt='' aria-hidden='true' />
            </button>

            <nav className={styles.navigation}>
                <SideBarLink
                    isOpen={isOpen}
                    icon={addIcon}
                    slug={slugs.home}
                    title='Home Page'
                />
                <SideBarLink
                    isOpen={isOpen}
                    icon={addIcon}
                    slug={slugs.lastPage}
                    title='Last Page'
                />
            </nav>
        </aside>
    )
}

export default Sidebar
