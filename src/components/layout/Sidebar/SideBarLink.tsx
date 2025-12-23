import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './SideBarLink.module.scss'

interface SideBarLinkProps {
    slug: string
    icon: string
    isOpen: boolean
    title: string
}

export const SideBarLink = memo(
    ({ slug, icon, isOpen, title }: SideBarLinkProps) => {
        const location = useLocation()
        const isActive = location.pathname === slug

        return (
            <Link
                to={slug}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
            >
                <img
                    src={icon}
                    className={styles.icon}
                    alt=''
                    aria-hidden='true'
                />
                <span
                    className={`${styles.title} ${isOpen ? styles.titleVisible : styles.titleHidden}`}
                >
                    {title}
                </span>
            </Link>
        )
    }
)

// Add display name for debugging
SideBarLink.displayName = 'SideBarLink'

export default SideBarLink
