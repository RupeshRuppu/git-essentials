export type CounterReducerState = {
	count: number;
};

const initialState: CounterReducerState = {
	count: 0,
};

type CounterActions = "ADD" | "SUBRACT" | "RESET";
type CounterAction = {
	type: CounterActions;
	payload: number;
};

export default function CounterReducer(
	state = initialState,
	action: CounterAction
) {
	const type = action.type;
	switch (type) {
		case "ADD":
			return { count: state.count + action.payload };
		case "SUBRACT":
			return { count: state.count - action.payload };
		case "RESET":
			return { count: 0 };
		default:
			return state;
	}
}
