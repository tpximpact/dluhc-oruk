import { Section } from '@tpx/Section'
import Link from 'next/link'
import { OrganisationStats } from '@/components/OrganisationStats'
import {getOrganisationsCounts}  from '@/util/content'

import styles from './Homepage.module.css'

const Org = ({ url, name, logo }) => (
	<li>
		<a href={url} target='_new'>
			<img alt={name} src={'/organisations/' + logo} />
		</a>
	</li>
)

export const Organisations = () => {
	let data = require('../../../content/home/organisations.json')
	const counts = getOrganisationsCounts()
	return (
		<Section>
			<h2>Organisations using Open Referral UK</h2>
			<OrganisationStats data={counts}/>
			<div>
				<a href='/register' className='button button-primary'>
					Feature your organisation
				</a>
			</div>
			<ul className={styles.organisations}>
				{data.map(d => (
					<Org key={d.logo} {...d} />
				))}
			</ul>
			<Link href='/community/organisations'>View all of the organisations in our community</Link>
		</Section>
	)
}

