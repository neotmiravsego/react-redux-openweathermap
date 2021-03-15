import { connect } from "react-redux";
import {
	addCityActionCreator,
	sortListActionCreator,
	delCityActionCreator,
} from "../store/actions";

const List = (props) => {
	return (
		<div className="list__wrap">
			<table class="table">
				<thead>
					<tr class="tr panel">
						<td className="panel__name-wrap">
							<th>Город</th>
						</td>
						<td className="panel__temp-wrap">
							<th>Температура</th>
						</td>
						<td className="pannel__pressure-wrap">
							<th>Атмосферное давление</th>
						</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{props.list.length >= 1 &&
						props.list.map((el, index) => (
							<tr className="city" key={index}>
								<td>
									<th className="city__name">{el.name}</th>
								</td>
								<td>
									<th className="city__temperature">{el.tempC}</th>
								</td>
								<td>
									<th className="city__pressure">{el.main.pressure} hPa</th>
								</td>
								<td>
									<th className="delete__wrap">
										<button
											className="button__delete"
											onClick={() => {
												props.delCity(el.name);
											}}
										>
											Удалить
										</button>
									</th>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		list: state.list,
	};
};

const mapDispatchProps = (dispatch) => {
	return {
		addUser: (city) => dispatch(addCityActionCreator(city)),
		sortList: (sortType) => dispatch(sortListActionCreator(sortType)),
		delCity: (city) => dispatch(delCityActionCreator(city)),
	};
};

export default connect(mapStateToProps, mapDispatchProps)(List);

// function connect() {
// 	return class extends React.Component {

// 		render() {
// 			return <OldComponent {...propsFromConnect}></OldComponent>;
// 		}
// 	};
// }

// a()(3)();
