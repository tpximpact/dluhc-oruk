import { Header } from '@/components/Header'

const SECTION = 'how'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} />
		{children}
	</>
)

export default Layout
