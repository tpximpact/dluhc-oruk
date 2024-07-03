import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Menu } from '@/components/Menu'
import { childrenOfNamedSiteItem } from '@/util/content'

const Page = () => {
	const items = childrenOfNamedSiteItem('tools')
	return (
		<>
			<NamedMarkdownPage name='tools' autoMenu={false}>
				<Menu items={items} />
			</NamedMarkdownPage>
		</>
	)
}
export default Page
