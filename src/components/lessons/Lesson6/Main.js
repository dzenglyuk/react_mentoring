import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// state = ["2"]. action = {"add", "10"} => new state = ["2", "10"]

const testReducer = (state = {}, { type, payload }) => {
    if (type === "add") {
        const { key, value } = payload || {};

        return { ...state, [key]: value }
    }

    if (type === "remove") {
        // const newState = {...state};
        // delete newState[payload];

        return { ...state, [payload]: undefined };
    }

    return state;
}

const store = createStore(testReducer);

const Wrapper = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

const TestComponent = ({ test, onAdd }) => {
    return <React.Fragment>
        <button onClick={() => onAdd("test", "MY VALUE")} >SEND MY VALUE</button>
        <span>{'TEST:' + test}</span>
    </React.Fragment>
}

const ConnectedComponent = connect(
    state => ({ test: state.test || "NO TEST" }),
    dispatch => ({ onAdd: (key, value) => dispatch({ type: 'add', payload: { key, value } }) })
)(TestComponent)

const Main = () => {
    return <React.Fragment>
        <Wrapper>
            <ConnectedComponent />
        </Wrapper>
        {/* <Wrapper>
            <ConnectedComponent />
        </Wrapper> */}
    </React.Fragment>
}

export default Main;

// theme = "light" || "dark"