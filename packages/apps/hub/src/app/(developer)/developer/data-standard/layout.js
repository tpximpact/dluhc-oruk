import { SubNavigation } from '@/components/SubNavigation'
import { Crumbtrail } from '@/components/Crumbtrail'
import {buildCrumbtrail} from  '@/util/content'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='data-standard' />
		<Crumbtrail crumbs={buildCrumbtrail('data-standard')} />
		{children}
	</>
)

export default Layout
