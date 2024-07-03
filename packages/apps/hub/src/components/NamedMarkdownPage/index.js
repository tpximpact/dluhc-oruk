import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'

export const NamedMarkdownPage = ({name,children}) => {
    const pageData = getNamedSiteItem(name)
    const markdownRaw = readFile({
		folder: pageData.contentPath
	})
    return (
		<main>
			<MarkdownContent raw={markdownRaw} autoMenu={true}/>
            {children}
		</main>
	)
}