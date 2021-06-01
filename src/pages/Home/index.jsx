import React, { useEffect } from 'react';
import { Button, DatePicker, List } from 'antd-mobile';
import { checkAuth, callApi } from 'ehome-utils';

import './index.less';

export default function Home(props) {
	const date = new Date();

	useEffect(() => {
		checkAuth();
		// setThemeColor();
	}, []);

	useEffect(() => {
		callApi({
			prefix: false,
			apiBase: '/ec',
			api: '/store/listStoresInNamespace'
		}).then(res => {
			console.log(res);
		});
	}, []);
	console.log(props);
	return (
		<div>
			<h3>Home</h3>
			<div className="test-viewport">测试转换</div>

			<List>
				<DatePicker value={date}>
					<List.Item arrow="horizontal">Datetime</List.Item>
				</DatePicker>
			</List>

			<Button type="primary" onClick={() => props.history.push('/about')}>
				play about
			</Button>
		</div>
	);
}
