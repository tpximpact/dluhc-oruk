import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Main } from '@tpx/Main'

export const NamedMarkdownPage = ({ name, children }) => {
	const pageData = getNamedSiteItem(name)
	const markdownRaw = readFile({
		folder: pageData.contentPath
	})
	return (
		<Main>
			<MarkdownContent raw={markdownRaw} autoMenu={true} />
			{children}
		</Main>
	)
}
