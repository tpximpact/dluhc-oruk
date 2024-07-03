import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const SECTION = 'how'

const Layout = ({ children }) => (
	<>
		<Header selected={SECTION} />
		<Main>{children}</Main>
	</>
)

export default Layout
