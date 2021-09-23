import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import {
	Cryptocurrencies,
	CryptoDetails,
	Exchanges,
	HomePage,
	Navbar,
	News,
} from './Components'

function App() {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route exact path='/exchanges' component={Exchanges} />
							<Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
							<Route exact path='/crypto/:coinId' component={CryptoDetails} />
							<Route exact path='/news' component={News} />
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}>
						Cryptopedia <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
						<Link to='/exchanges'>Exchanges</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default App
