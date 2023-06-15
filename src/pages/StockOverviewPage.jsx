import React from 'react';
import AutoComplete from '../components/AutoComplete';
import StockList from '../components/StockList';

const StockOverviewPage = () => {
	return (
		<div>
			<h1>StockOverviewPage</h1>
			<AutoComplete />
			<StockList />
		</div>
	);
};

export default StockOverviewPage;
