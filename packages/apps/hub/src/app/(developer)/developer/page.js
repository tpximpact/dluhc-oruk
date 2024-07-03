import { readFile } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
// import { Menu } from '@/components/Menu'

const SECTION = 'developer'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
		</>
	)
}
export default Page
