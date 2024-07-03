import { Validate } from '@oruk/Validate'
import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'

const NAME = 'validator'

export default async function Page() {
	const pageData = getNamedSiteItem(NAME)
	const markdownRaw = readFile({
		folder: pageData.contentPath
	})

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Validate />
		</>
	)
}
