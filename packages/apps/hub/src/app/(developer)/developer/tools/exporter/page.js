import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'

const NAME = 'exporter'

export default async function Page() {
	const pageData = getNamedSiteItem(NAME)
	const markdownRaw = readFile({
		folder: pageData.contentPath
	})

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
		</>
	)
}
