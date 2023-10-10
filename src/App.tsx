import Branch2 from "./components/Branch2";
import Branch3 from "./components/Branch3";
import { StoreState, Dispatch } from "./redux/store";
import { connect } from "react-redux";

type AppProps = Record<string, unknown> & MappedProps;

function App(props: AppProps) {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<h3>{props.count}</h3>
			<div style={{ gap: 5, display: "flex", justifyContent: "center" }}>
				<button onClick={props.increment}>Increment</button>
				<button onClick={props.decrement}>Decrement</button>
				<button onClick={props.reset}>Reset</button>
			</div>
			<h3>{props.iceCreams}</h3>
			<div style={{ gap: 5, display: "flex", justifyContent: "center" }}>
				<button onClick={props.sell}>Sell</button>
				<button onClick={props.restock}>Restock</button>
			</div>
			<Branch2 />
			<Branch3 />
		</div>
	);
}

const mapStateToProps = (state: StoreState) => {
	return {
		count: state.counterReducer.count,
		iceCreams: state.iceCreamReducer.iceCreams,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		increment: () => dispatch({ type: "ADD", payload: 10 }),
		decrement: () => dispatch({ type: "SUBRACT", payload: 4 }),
		reset: () => dispatch({ type: "RESET", payload: 0 }),
		sell: () => dispatch({ type: "SELL", payload: 10 }),
		restock: () => dispatch({ type: "RESTOCK", payload: 20 }),
	};
};

const connecter = connect(mapStateToProps, mapDispatchToProps);
type MappedProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connecter(App);
