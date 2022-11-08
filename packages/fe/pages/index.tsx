import Head from 'next/head'
import HomePage from '../src/HomePage'

export default function Home() {
	return (
		<>
			<Head>
				<title>File manager</title>
				<meta name="description" content="File manager" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage/>
		</>
	)
}
