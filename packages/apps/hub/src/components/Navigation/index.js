import styles from './Navigation.module.css'
import { getSiteItems } from '@/util/content'
import { NavigationItem } from '@/components/NavigationItem'

export const Navigation = ({ selected }) => (
	<nav className={styles.nav}>
		<ol>
			{getSiteItems().map(item => (
				<NavigationItem
					key={item.urlPath}
					styles={styles}
					selected={selected === item.name}
					{...item}
				/>
			))}
		</ol>
	</nav>
)
