import React, { useState } from 'react';
import './App.css';
import { padTime } from './utils';

export default function App() {
	const [title, setTile] = useState('Запустите теймер!');
	const [timeLeft, setTimeLeft] = useState(5);

	const minutes = padTime(Math.floor(timeLeft / 60));
	const seconds = padTime(timeLeft - minutes * 60);

	const startTimer = () => {
		const timer = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft >= 1) {
					return timeLeft - 1;
				}
				return 0;
			});
		}, 1000);
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
				<button>Стоп</button>
				<button>Сброс</button>
			</div>
		</div>
	);
}
