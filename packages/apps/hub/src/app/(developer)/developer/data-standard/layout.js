import { SubNavigation } from '@/components/SubNavigation'

const Layout = ({ children }) => (
	<>
		<SubNavigation selected='data-standrd'/>
		{children}
	</>
)

export default Layout
