import * as React from 'react';
import { Panel } from 'ro-component-library';
import { TestGraph } from 'ro-graph';

export default class extends React.Component {
	state = {
		count: 30,
	};

	increment = async () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<Panel>
				<button onClick={this.increment}>clicks {this.state.count}</button>
				<TestGraph />
			</Panel>
		);
	}
}
