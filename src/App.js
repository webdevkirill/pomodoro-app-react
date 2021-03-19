import React, { useRef, useState } from 'react';
import './App.css';
import { padTime } from './utils';

export default function App() {
	const [title, setTitle] = useState('Запустите таймер!');
	const [timeLeft, setTimeLeft] = useState(5);

	const minutes = padTime(Math.floor(timeLeft / 60));
	const seconds = padTime(timeLeft - minutes * 60);

	let timerRef = useRef(null);

	const startTimer = () => {
		if (timerRef.current !== null) return;

		setTitle('Работа идет отлично!');
		timerRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft >= 1) {
					return timeLeft - 1;
				}
				resetTimer();
				return 0;
			});
		}, 1000);
	};

	const stopTimer = () => {
		if (timerRef.current === null) return;

		setTitle('Останавливаться плохо(');
		clearInterval(timerRef.current);
	};

	const resetTimer = () => {
		setTitle('Запустите таймер!');
		setTimeLeft(25 * 60);
		clearInterval(timerRef.current);
	};

	return (
		<div className='app'>
			<h2>{title}</h2>

			<div className='timer'>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>

			<div className='buttons'>
				<button onClick={startTimer}>Старт</button>
				<button onClick={stopTimer}>Стоп</button>
				<button onClick={resetTimer}>Сброс</button>
			</div>
		</div>
	);
}
