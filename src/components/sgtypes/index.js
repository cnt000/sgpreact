import { h } from "preact";
import style from "./style.less";

const SgTypes = ({ data }) => (
	<ul className={style.list}>
		{Object.keys(data).map(o => (
			<li className={style.element}>
				<a href={`/sizeguide/${o}`}>{o}</a>
			</li>
		))}
	</ul>
);

export default SgTypes;
