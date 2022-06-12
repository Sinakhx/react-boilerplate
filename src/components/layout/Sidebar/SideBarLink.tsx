import clsx from 'clsx'
import { memo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface ISideBarLinkProps {
    slug: string
    icon: string
    isOpen: boolean
    title: string
}

export const SideBarLink = memo(
    ({ slug, icon, isOpen, title }: ISideBarLinkProps) => {
        const activeLink = window.location.pathname
        const navigate = useNavigate()
        const handleLinkClick = useCallback(() => navigate(slug), [slug])
        return (
            <Link
                to={slug}
                onClick={handleLinkClick}
                className={clsx(
                    'side-bar__link',
                    activeLink === slug && '--is-active'
                )}
            >
                <img src={icon} alt={slug.slice(1)} />
                {isOpen ? <span className='dashboard-btn'>{title}</span> : null}
            </Link>
        )
    }
)
