import { SubNavigation } from '@/components/SubNavigation'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='data-standard' />
		{children}
	</>
)

export default Layout
