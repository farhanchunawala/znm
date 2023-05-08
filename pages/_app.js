import '@/styles/globals.scss'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar></Navbar>
			<Component {...pageProps} />
		</>
	)
}
