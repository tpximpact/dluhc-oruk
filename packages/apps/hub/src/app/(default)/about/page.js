import { Header } from '@/components/Header'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

const SECTION = 'about'

const Page = () => (
	<>
		<Header selected={SECTION} />
		<NamedMarkdownPage name={SECTION} />
	</>
)
export default Page
