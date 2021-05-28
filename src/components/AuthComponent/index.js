/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { checkAuth } from 'ehome-utils';

class AuthComponent extends Component {
	static propTypes = {
		showPage: PropTypes.func.isRequired,
		children: PropTypes.element.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			/** 是否展示业务页面 */
			showPage: false
		};
	}

	componentDidMount() {
		const self = this;
		if (process.env.NODE_ENV === 'development') {
			self.setState({ showPage: true }, () => {
				this.props.showPage();
			});
			return false;
		}
		/** 进行鉴权操作 */
		Promise.all([checkAuth()])
			.then(() => {
				self.setState({ showPage: true }, () => {
					this.props.showPage();
				});
			})
			.catch(res => {
				window.alert(res.errorMsg || '授权失败,请稍后再试');
			});
	}

	render() {
		const { props, state } = this;

		return (
			<div className={process.env.APP_Name}>
				{state.showPage ? props.children : <div />}
			</div>
		);
	}
}

export default withRouter(AuthComponent);
