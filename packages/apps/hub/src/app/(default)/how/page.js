import { buildItemMenuData, getNamedSiteItem } from '@/util/content'
import { Menu } from '@/components/Menu'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

const SECTION = 'how'

const Page = () => {
	const items = buildItemMenuData(SECTION)
	// insert the dashboard into the in-page menu ¯\_(ツ)_/¯
	const d = getNamedSiteItem('dashboard')
	if (d) items.push(d)

	return (
		<NamedMarkdownPage name={SECTION}>
			<Menu items={items} />
		</NamedMarkdownPage>
	)
}
export default Page
