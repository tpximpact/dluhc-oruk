import { SubNavigation } from '@/components/SubNavigation'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='tools'/>
		{children}
	</>
)

export default Layout
