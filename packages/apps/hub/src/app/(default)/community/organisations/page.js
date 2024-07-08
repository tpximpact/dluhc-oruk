import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import {getOrganisationsData,getOrganisationsCounts}  from '@/util/content'
import styles from './Organisations.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Section } from '@tpx/Section'

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
	<Counts data={counts}/>
	<ol className={styles.Organisations}>
		{
			data.map(
				(org,index) => <Organisation {...org} key={index}/>
			)
		}
	</ol>
</Section>

const Counts = ({data}) =><div>
{
Object.keys(data).map((k,index) => 
	<span className={styles.countItem} key={index}><span className={styles.countCount}>{data[k]}</span> <span className={styles.countKey}>{k}</span></span>
)
}
	</div>

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
