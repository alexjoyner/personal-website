import React from 'react';

export default class extends React.Component {
	state = {
		count: 0,
	};

	increment = async () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<button onClick={this.increment}>clicks {this.state.count}</button>
			</div>
		);
	}
}
