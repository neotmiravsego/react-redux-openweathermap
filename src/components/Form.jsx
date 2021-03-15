import { connect } from "react-redux";
import { addCityActionCreator } from "../store/actions";
import { useState } from "react";

const Form = (props) => {
	const [cityName, setCityName] = useState("");

	const [error, setError] = useState(false);

	const myClick = () => {
		let apiKey = "c529b948ab2c0d17f8a206fdf7eb48b1";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
		fetch(url).then((response) => {
			if (response.status === 200) {
				response.json().then((data) => {
					let setTemp = data.main.temp_max - 273.15;
					let setData = {
						...data,
						tempC: `${setTemp}°С`,
					};
					props.addCity(setData);
				});
			} else {
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 1000);
			}
		});
	};

	const getValueInput = (e) => {
		setCityName(e.target.value);
	};

	return (
		<div className="form__wrap form">
			<div className="form__group">
				{error && <p className="error">Неверно введен город</p>}
				<input
					className="form__input"
					type="text"
					placeholder="Введите название города"
					onChange={(e) => getValueInput(e)}
				/>
				<button className="form__button" onClick={myClick}>
					Добавить
				</button>
			</div>
		</div>
	);
};

const mapDispatchProps = (dispatch) => {
	return {
		addCity: (city) => dispatch(addCityActionCreator(city)),
	};
};

export default connect(null, mapDispatchProps)(Form);
