import { h } from "preact";
import style from "./style.less";

const SgTable = ({ data }) => {
	return (
		data &&
		data.rows && (
			<table>
				<thead>
					<tr>
						{Object.keys(data.rows[0]).map(p => (
							<th class={style.cell}>{p}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.rows.map(o => (
						<tr>
							{Object.keys(o).map(p => <td class={style.cell}>{o[p]}</td>)}
						</tr>
					))}
				</tbody>
			</table>
		)
	);
};

export default SgTable;
