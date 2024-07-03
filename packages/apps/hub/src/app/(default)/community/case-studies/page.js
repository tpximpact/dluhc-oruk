import { getNamedSiteItem } from '@/util/content'
import { buildItemMenuData } from '@/util/content'
import { Menu } from '@/components/Menu'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

const Page = () => {
	const NAME = 'case-studies'
	const pageData = getNamedSiteItem(NAME)
	const items = buildItemMenuData(pageData.contentPath)

	return (
		<NamedMarkdownPage name={NAME}>
			<Menu items={items} />
		</NamedMarkdownPage>
	)
}
export default Page
