import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import {getOrganisationsData,getOrganisationsCounts}  from '@/util/content'
import styles from './Organisations.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Section } from '@tpx/Section'
import { OrganisationStats } from '@/components/OrganisationStats'

export default async function Page() {
	return <><NamedMarkdownPage name='organisations' />
	<PageMargin>
<Organisations 
counts={getOrganisationsCounts()}
data={getOrganisationsData()} />
</PageMargin>
	</>
}

const Organisations = ({data, counts}) =><Section>
	<OrganisationStats data={counts}/>
	<ol className={styles.Organisations}>
		{
			data.map(
				(org,index) => <Organisation {...org} key={index}/>
			)
		}
	</ol>
</Section>



const Organisation = ({
links,
name,
logo
}
) =>
	<li className={styles.Organisation}>
		
			<img alt={name} src={'/organisations/' + logo} />
			<div>{name}</div>
			{
				links.map(
					data => <a className={styles.link} key={data.url} href={data.url} target='_new'>
					{data.text}
				</a>
				)
			}
	</li>
