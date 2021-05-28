import React from 'react';
import { Button, DatePicker, List } from 'antd-mobile';

export default function Home(props) {
	const date = new Date();
	console.log(props);
	return (
		<div>
			<h3>Home</h3>
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
