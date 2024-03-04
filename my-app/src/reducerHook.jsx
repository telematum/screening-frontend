import {useReducer} from "react";



function ReducerHook  () {
	const initialValue = 0;
	const reducer = (state, action) => {
		switch (action) {
			case "Decrement": {
				return state - 1;
			}
			case "Increment": {
				return state + 1;
			}
			case "reset": {
				return (state = initialValue);
			}
			default: {
				return state;
			}
		}
	};
	const [count, dispatch] = useReducer(reducer, initialValue);

	return (
		<>
			<div>This is the count - {count}</div>
			<button onClick={() => dispatch("Decrement")}>
				Decrement
			</button>
			<button onClick={() => dispatch("Increment")}>
				Increment
			</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</>
	);
};

export default ReducerHook;
