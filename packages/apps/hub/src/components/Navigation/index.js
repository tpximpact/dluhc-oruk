import Link from 'next/link'
import styles from './Navigation.module.css'
import { getSiteItems } from '@/util/content'

export const Navigation = ({ selected }) => (
	<nav className={styles.nav}>
		<ol>
			{getSiteItems().map(item => (
				<NavItem key={item.urlPath} selected={selected === item.name} {...item} />
			))}
		</ol>
	</nav>
)

const NavItem = ({ selected, label, urlPath, offsite }) => {
	if (offsite)
		return (
			<li classlabel={styles.offsite}>
				<a href={urlPath} target='_new'>
					{label}
				</a>
			</li>
		)

	if (selected) return <li className={styles.selected}>{label}</li>

	return (
		<li>
			<Link href={urlPath}>{label}</Link>
		</li>
	)
}
