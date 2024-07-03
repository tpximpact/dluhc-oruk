import { slugsFrom, readFile } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Main } from '@tpx/Main'

const SUBFOLDER = "/how"

export const generateStaticParams = () => slugsFrom(SUBFOLDER)

const Page = ({ params }) => {
	const { slug } = params
	const markdownRaw = readFile({
		slug: slug,
		folder: SUBFOLDER
	})
	return (
		<Main>
		<MarkdownContent
			raw={markdownRaw}
			autoMenu={true}
			afterLinks={[{ url: '/how/02-features-of-the-standard', name: 'Features of the standard' }]}
		/>
		</Main>
	)
}
export default Page
