import { readFile, childrenOfNamedSiteItem, flattenSite } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Menu } from '@/components/Menu'

const SECTION = 'community'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})

	const items = childrenOfNamedSiteItem(SECTION)
	// TODO add dashboard numbers.splice(2, 0, 3);

	return (
		<>
		{
JSON.stringify(flattenSite())
		}
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={SECTION} />
		</>
	)
}
export default Page
