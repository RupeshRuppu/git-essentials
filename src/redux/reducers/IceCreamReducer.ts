export type IceCreamReducerState = {
	iceCreams: number;
};

const initialState: IceCreamReducerState = {
	iceCreams: 0,
};

type IceCreamActions = "RESTOCK" | "SELL";
type IceCreamAction = {
	type: IceCreamActions;
	payload: number;
};

export default function IceCreamReducer(
	state = initialState,
	action: IceCreamAction
) {
	const type = action.type;
	switch (type) {
		case "SELL":
			return { iceCreams: state.iceCreams - action.payload };
		case "RESTOCK":
			return { iceCreams: state.iceCreams + action.payload };
		default:
			return state;
	}
}
