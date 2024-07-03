import styles from './Menu.module.css'
import Link from 'next/link'

export const Menu = ({ items }) => {
	return (
		<main>
			{items.map(item => (
				<MenuItem key={item.name} {...item} />
			))}
		</main>
	)
}

const MenuItem = props => {
	if (props.offSite) {
		return (
			<a className={styles.menuItem} href={props.urlPath} target='_new'>
				{props.label}
			</a>
		)
	}

	return (
		<Link className={styles.menuItem} href={props.urlPath}>
			{props.label}
			{props.teaser && <span className={styles.teaser}>{props.teaser}</span>}
		</Link>
	)
}
