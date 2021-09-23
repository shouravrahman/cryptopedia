import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { Cryptocurrencies, News } from '../Components'
import { useGetCryptosQuery } from '../services/cryptoApi'
const { Title } = Typography

const HomePage = () => {
	const { data, isFetching } = useGetCryptosQuery(10)

	const globalStats = data?.data?.stats

	const { total, totalExchanges, totalMarkets, totalMarketCap, total24hVolume } =
		globalStats

	if (isFetching) return 'Loading...'
	return (
		<>
			<Title level={2} className='heading'>
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic title='Total Cryptocurrencies' value={total} />
				</Col>
				<Col span={12}>
					<Statistic title='Total Exchanges' value={millify(totalExchanges)} />
				</Col>
				<Col span={12}>
					<Statistic title='Total Market Cap' value={millify(totalMarketCap)} />
				</Col>
				<Col span={12}>
					<Statistic title='Total 24 hour volume' value={millify(total24hVolume)} />
				</Col>
				<Col span={12}>
					<Statistic title='Total Markets' value={millify(totalMarkets)} />
				</Col>
			</Row>

			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Top 10 Cryptocurrencies in the world
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/cryptocurrencies'>Show More</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified />
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Latest Crypto News
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/news'>Show More</Link>
				</Title>
			</div>
			<News simplified />
		</>
	)
}

export default HomePage
