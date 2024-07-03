import { Header } from '@/components/Header'

const SECTION = 'developers'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} developer={true} />
		{children}
	</>
)

export default Layout
