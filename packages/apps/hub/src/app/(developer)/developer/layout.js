import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const SECTION = 'developer'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} developer={true} />
		<Main>
			<nav>(developer sub menu - TODO)</nav>
			{children}
		</Main>
	</>
)

export default Layout
