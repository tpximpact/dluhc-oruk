import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Header } from '@/components/Header'

export default async function Page() {
	return (
		<>
			<Header />
			<NamedMarkdownPage name='not-found' />
		</>
	)
}
