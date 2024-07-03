import { readFile } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const SECTION = 'about'

const Page = () => {
	const markdownRaw = readFile({
		folder: SECTION
	})
	return (
		<>
			<Header selected={SECTION} />
			<Main>
				<MarkdownContent raw={markdownRaw} autoMenu={true} />
			</Main>
		</>
	)
}
export default Page
