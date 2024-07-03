import { Header } from '@/components/Header'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

const SECTION = 'contact'

const Page = () => (
	<>
		<Header selected={SECTION} />
		<NamedMarkdownPage name={SECTION} autoMenu={false} />
	</>
)
export default Page
