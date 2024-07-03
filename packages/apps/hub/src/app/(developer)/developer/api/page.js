import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Menu } from '@/components/Menu'
import { childrenOfNamedSiteItem } from '@/util/content'

const Page = () => {
	const items = childrenOfNamedSiteItem('api')
	return (
		<>
			<NamedMarkdownPage name='api' autoMenu={false}>
				<Menu items={items} />
			</NamedMarkdownPage>
		</>
	)
}
export default Page
