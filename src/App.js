import React from 'react';
import './App.css';
import { useTimer } from './hooks/useTimer';

export default function App() {
	const {
		title,
		minutes,
		seconds,
		isRunning,
		startTimer,
		stopTimer,
		resetTimer,
	} = useTimer('Запустите таймер!', 25);

	return (
		<div className='app'>
			<h2>{title}</h2>

			<div className='timer'>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>

			<div className='buttons'>
				{!isRunning ? (
					<button onClick={startTimer}>Старт</button>
				) : (
					<button onClick={stopTimer}>Стоп</button>
				)}
				<button onClick={resetTimer}>Сброс</button>
			</div>
		</div>
	);
}
