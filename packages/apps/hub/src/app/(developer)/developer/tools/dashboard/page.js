import { Dashboard } from '@oruk/Dashboard'


import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export default async function Page() {
	return (

	<NamedMarkdownPage name='dashboard'>
	<Dashboard />
		</NamedMarkdownPage>
)
}