import { useMemo, useState } from "react";
import useCustomHook from "./useCustomHook"

function MemoHook() {
	let [count, setCount] = useState(0);
	let [countSecond, setCountSecond] = useState(0);
            useCustomHook(count)
	const firstIncreaseCount = () => {
		setCount((count +1));
            
	};
	const isEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) {
			i++;
		}
		return count % 2 === 0;
	}, [count]);

	const secondIncreaseCount = () => {
		setCountSecond((countSecond +1));
	};
      

	return (
		<>
			<div>{isEven ? "even" : "odd"} </div>
			<button
				onClick={() => {
					firstIncreaseCount();
				}}
			>
				increase - {count}
			</button>
			<button onClick={secondIncreaseCount}>
				Increase - {countSecond}
			</button>
		</>
	);
}

export default MemoHook;
