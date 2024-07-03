import { readFile, childrenOfNamedSiteItem, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Menu } from '@/components/Menu'

const SECTION = 'community'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})

	let items = childrenOfNamedSiteItem(SECTION)
	// insert the dashboard into the in-page menu ¯\_(ツ)_/¯
	const d = getNamedSiteItem('dashboard')
	if(d) items.splice(3, 0, d)

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={SECTION} />
		</>
	)
}
export default Page
