import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Dashboard } from '@oruk/Dashboard'

const NAME = 'dashboard'

export default async function Page() {
	const pageData = getNamedSiteItem(NAME)
	const markdownRaw = readFile({
		folder: pageData.contentPath
	})

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Dashboard />
		</>
	)
}
