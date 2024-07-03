import { childrenOfNamedSiteItem, getNamedSiteItem } from '@/util/content'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Menu } from '@/components/Menu'

const SECTION = 'community'

const Page = () => {
	let items = childrenOfNamedSiteItem(SECTION)
	// insert the dashboard into the in-page menu ¯\_(ツ)_/¯
	const d = getNamedSiteItem('dashboard')
	if (d) items.splice(3, 0, d)

	return (
		<NamedMarkdownPage name={SECTION}>
			<Menu items={items} folder={SECTION} />
		</NamedMarkdownPage>
	)
}
export default Page
