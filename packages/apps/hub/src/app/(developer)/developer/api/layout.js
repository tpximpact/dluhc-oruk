import { SubNavigation } from '@/components/SubNavigation'
import { Crumbtrail } from '@/components/Crumbtrail'
import { buildCrumbtrail } from '@/util/content'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='api' />
		<Crumbtrail crumbs={buildCrumbtrail('api')} />
		{children}
	</>
)

export default Layout
