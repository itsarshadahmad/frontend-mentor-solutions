import { useState } from "react";
import findButton from "./assets/icon-arrow.svg";
import { checkLeapYear, calculateDate } from "./utils";
import "./App.scss";

function App() {
	const [date, setDate] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [error, setError] = useState({});
	const [calculatedDate, setCalculatedDate] = useState({
		years: "--",
		months: "--",
		days: "--",
	});

	function setValues(year, month, date) {
		if (year && month && date) {
			setCalculatedDate(calculateDate(year, month, date));
		}
	}

	function setupError(errorType) {
		setError((prev) => ({
			...prev,
			...errorType,
		}));
	}

	function handleSubmit() {
		const parsedMonth = Number.parseInt(month);
		const parsedDate = Number.parseInt(date);
		const parsedYear = Number.parseInt(year);
		const currentYear = new Date().getFullYear();

		if (date !== "" && parsedDate <= 31 && parsedDate >= 1) {
			if (
				parsedMonth === 1 ||
				parsedMonth === 3 ||
				parsedMonth === 5 ||
				parsedMonth === 7 ||
				parsedMonth === 8 ||
				parsedMonth === 10 ||
				parsedMonth === 12 ||
				month === ""
			) {
				setupError({ date: null });
				setValues(parsedYear, parsedMonth, parsedDate);
			} else if (
				parsedMonth === 4 ||
				parsedMonth === 6 ||
				parsedMonth === 9 ||
				parsedMonth === 11
			) {
				setupError({ date: null });
				setValues(parsedYear, parsedMonth, parsedDate);
			} else if (
				parsedMonth === 2 &&
				parsedDate <= 29 &&
				parsedDate >= 1
			) {
				if (checkLeapYear(parsedYear) && parsedDate <= 29) {
					setupError({ date: null });
					setValues(parsedYear, parsedMonth, parsedDate);
				} else if (parsedDate <= 28) {
					setupError({ date: null });
					setValues(parsedYear, parsedMonth, parsedDate);
				} else {
					setupError({ date: "Must be a valid day" });
				}
			} else {
				setupError({ date: "Must be a valid day" });
			}
		} else {
			setupError({ date: "Must be a valid day" });
		}

		if (month !== "" && parsedMonth <= 12 && parsedMonth >= 1) {
			setupError({ month: null });
			setValues(parsedYear, parsedMonth, parsedDate);
		} else {
			setupError({ month: "Must be a valid month" });
		}

		if (year !== "" && year <= currentYear) {
			if (year >= 1900) {
				setupError({ year: null });
				setValues(parsedYear, parsedMonth, parsedDate);
			} else {
				setupError({ year: "Must be after 1900" });
			}
		} else {
			setupError({ year: "Must be a valid year" });
		}
	}

	return (
		<div className="container">
			<div className="date-input-container">
				<div className={error.date ? "error" : ""}>
					<label>DAY</label>
					<input
						type="number"
						value={date}
						placeholder="DD"
						onChange={(e) => setDate(e.target.value)}
					/>
					<p>{error.date}</p>
				</div>

				<div className={error.month ? "error" : ""}>
					<label>MONTH</label>
					<input
						type="number"
						value={month}
						placeholder="MM"
						onChange={(e) => setMonth(e.target.value)}
					/>
					<p>{error.month}</p>
				</div>

				<div className={error.year ? "error" : ""}>
					<label>YEAR</label>
					<input
						type="number"
						value={year}
						placeholder="YYYY"
						name="year"
						onChange={(e) => setYear(e.target.value)}
					/>
					<p>{error.year}</p>
				</div>
			</div>
			<div className="line-and-button">
				<hr />
				<img
					src={findButton}
					alt="find button"
					className="date-find-button"
					onClick={handleSubmit}
				/>
			</div>
			<div className="calculated-time">
				<h1 className="calculated-values">
					<span>{error.year ? "--" : calculatedDate.years}</span>{" "}
					years
				</h1>
				<h1 className="calculated-values">
					<span>{error.month ? "--" : calculatedDate.months}</span>{" "}
					months
				</h1>
				<h1 className="calculated-values">
					<span>{error.date ? "--" : calculatedDate.days}</span> days
				</h1>
			</div>
		</div>
	);
}

export default App;
