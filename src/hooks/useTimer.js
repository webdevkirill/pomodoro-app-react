import { useRef, useState } from 'react';
import { padTime } from '../utils';

export function useTimer(defaultTitle, timerTimeInMinutes) {
	const [title, setTitle] = useState(defaultTitle);
	const [timeLeft, setTimeLeft] = useState(timerTimeInMinutes * 60);

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

		clearInterval(timerRef.current);
		timerRef.current = null;

		setTitle('Останавливаться плохо(');
	};

	const resetTimer = () => {
		clearInterval(timerRef.current);
		timerRef.current = null;

		setTitle(defaultTitle);
		setTimeLeft(timerTimeInMinutes * 60);
	};

	return {
		title,
		minutes,
		seconds,
		startTimer,
		stopTimer,
		resetTimer,
	};
}
