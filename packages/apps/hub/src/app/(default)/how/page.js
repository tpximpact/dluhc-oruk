import { readFile } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { buildItemMenuData } from '@/util/content'
import { Menu } from '@/components/Menu'

const SECTION = 'how'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})

	const items = buildItemMenuData(SECTION)

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={SECTION} />
		</>
	)
}
export default Page
