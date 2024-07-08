import styles from './Organisations.module.css'

export const OrganisationStats = ({data}) =><div>
{
Object.keys(data).map((k,index) => 
	<span className={styles.countItem} key={index}><span className={styles.countCount}>{data[k]}</span> <span className={styles.countKey}>{k}</span></span>
)
}
	</div>