import { readFile } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const SECTION = 'contact'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})
	return (
		<>
			<Header selected={SECTION} />
			<Main>
				<MarkdownContent raw={markdownRaw} />
			</Main>
		</>
	)
}
export default Page
