import { useEffect } from 'react';

function Timer({ timeLeft, setTimeLeft }) {
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
		}, 1000);
		return () => {
			clearInterval(timer); //that's a cleanup function
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); //second argument empty array so the function runs only when the component mounts and cleanup function runs on unmount

	// if (props.timeLeft > 0) {
	// 	setTimeout(() => {
	// 		props.setTimeLeft(props.timeLeft - 1);
	// 	}, 1000);
	// }
	return <strong>Time: {timeLeft}</strong>;
}

export default Timer;
