import Link from 'next/link'
import styles from './SubNavigation.module.css'
import { getSiteItems } from '@/util/content'
import { PageMargin } from '@tpx/PageMargin'

export const SubNavigation = ({ selected }) => (
	<PageMargin>
	<nav className={styles.nav}>
		<ol>
			SUBNAV
		</ol>
	</nav>
	</PageMargin>
)

const SubNavItem = ({ hide, selected, label, urlPath, offsite }) => {
	if (hide) return
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
