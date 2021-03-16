import { connect } from "react-redux";
import { FilterIcon } from "./Icons";
import {
	addCityActionCreator,
	sortListActionCreator,
	delCityActionCreator,
} from "../store/actions";
import { useState, useEffect } from "react";

const List = (props) => {
	const [classNameFilter, setActive] = useState("panel__name-wrap");
	useEffect(() => {
		if (props.sortType !== null) {
			if (props.sortType) {
				setActive("panel__name-wrap asc");
			} else {
				setActive("panel__name-wrap des");
			}
		}
	}, [props.sortType]);
	return (
		<div className="list__wrap">
			<table className="table">
				<thead>
					<tr className="tr panel">
						<td className={classNameFilter} onClick={props.sortList}>
							<p>Город</p>
							<p className="wrap__arrow arrow">
								<FilterIcon />
								<FilterIcon />
							</p>
						</td>
						<td className="panel__temp-wrap">
							<p>Температура</p>
						</td>
						<td className="pannel__pressure-wrap">
							<p>Атмосферное давление</p>
						</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{props.list.length >= 1 &&
						props.list.map((el, index) => (
							<tr className="city" key={index}>
								<td>
									<p className="city__name">{el.name}</p>
								</td>
								<td>
									<p className="city__temperature">{el.tempC}</p>
								</td>
								<td>
									<p className="city__pressure">{el.main.pressure} hPa</p>
								</td>
								<td>
									<p className="delete__wrap">
										<button
											className="button__delete"
											onClick={() => {
												props.delCity(el.name);
											}}
										>
											Удалить
										</button>
									</p>
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
		sortType: state.sortType,
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
