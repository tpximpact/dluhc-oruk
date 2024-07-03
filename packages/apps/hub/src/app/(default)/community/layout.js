import { Header } from '@/components/Header'

const SECTION = 'community'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} />
		{children}
	</>
)

export default Layout
