import React, { useState, useEffect } from 'react';

const Lifecycle = () => {
	const [ counter1, setCounter1 ] = useState(0);
	const [ counter2, setCounter2 ] = useState(0);

	useEffect(() => {
		console.log('useEffect no dependecis');
	});

	useEffect(() => {
		console.log('useEffect []');
	}, []);

	useEffect(
		() => {
			console.log('useEffect counter 1');
		},
		[ counter1 ]
	);

	useEffect(
		() => {
			console.log('useEffect counter 2');
		},
		[ counter2 ]
	);

	useEffect(
		() => {
			console.log('Counter 2 y Counter1');
		},
		[ counter2, counter1 ]
	);

	return (
		<div>
			<h1>Clicks c1:{counter1}</h1>
			<h1>Clicks c2:{counter2}</h1>
			<button onClick={() => setCounter1(counter1 + 1)}> Increment c1</button>
			<button onClick={() => setCounter2(counter2 + 1)}> Increment c2</button>
		</div>
	);
};

export default Lifecycle;
