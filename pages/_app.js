import '@/styles/globals.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'

export default function App({ Component, pageProps }) {
	return (
		<>
			{/* <Header></Header> */}
			<Component {...pageProps} />
			{/* <Footer></Footer> */}
		</>
	)
}
