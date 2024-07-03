
import { SubNavigation } from '@/components/SubNavigation'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Menu } from '@/components/Menu'
import { childrenOfNamedSiteItem} from '@/util/content'

const Page = () => {
	const tools = childrenOfNamedSiteItem('tools')
	return (
		<>
			<SubNavigation />
			<NamedMarkdownPage name='developers' autoMenu={false}>
				<Menu items={tools}/>
				</NamedMarkdownPage>
		</>
	)
}
export default Page
