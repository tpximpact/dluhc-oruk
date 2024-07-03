import { SubNavigation } from '@/components/SubNavigation'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='api' />
		{children}
	</>
)

export default Layout
