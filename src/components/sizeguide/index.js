import { h, Component } from "preact";
import SgTable from "../sgtable";
import SgTypes from "../sgtypes";
import style from "./style.less";

export default class Sizeguide extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		fetch(
			"https://media.yoox.biz/ytos/resources/ALEXANDERMCQUEENGROUP/sizeguide/sizeGuideData.json"
		)
			.then(response => response.json())
			.then(data => this.setState({ data: data.SizeClasses }));
	}

	render({ chiave }, {}) {
		return (
			<div class={style.sizeguide}>
				<p>Actual chiave: {chiave}</p>
				<SgTypes data={this.state.data} />
				<SgTable data={this.state.data[this.props.chiave]} />
			</div>
		);
	}
}
