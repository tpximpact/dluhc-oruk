import { Validate } from '@oruk/Validate'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export default async function Page() {
	return (
		<NamedMarkdownPage name='dashboard'>
			<Validate />
		</NamedMarkdownPage>
	)
}
