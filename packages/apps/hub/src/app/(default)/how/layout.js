import { Header } from '@/components/Header'
import { Crumbtrail } from '@/components/Crumbtrail'
import {buildCrumbtrail} from  '@/util/content'
const SECTION = 'how'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} />
		<Crumbtrail crumbs={buildCrumbtrail(SECTION)} />
		{children}
	</>
)

export default Layout
