import Link from 'next/link'

export const NavigationItem = ({ styles, hide, selected, label, urlPath, offsite }) => {
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
