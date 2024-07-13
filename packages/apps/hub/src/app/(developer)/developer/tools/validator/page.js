import { Validator } from '@oruk/Validator'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export default async function Page() {
	return (
		<NamedMarkdownPage name='dashboard'>
			<Validator />
		</NamedMarkdownPage>
	)
}
