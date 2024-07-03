import Link from 'next/link'
import styles from './SubNavigation.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { childrenOfNamedSiteItem } from '@/util/content'
import {NavigationItem} from "@/components/NavigationItem"

export const SubNavigation = ({ selected }) => (
	<PageMargin>
	<nav className={styles.nav}>
		<ol>
			{childrenOfNamedSiteItem("developers").map(item => (
				<NavigationItem key={item.urlPath} styles={styles} selected={selected === item.name} {...item} />
			))}
		</ol>
	</nav>
	</PageMargin>
)
