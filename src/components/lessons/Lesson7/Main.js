import React, { useEffect, useState } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

// state = ["2"]. action = {"add", "10"} => new state = ["2", "10"]

const initialState = { fixedProp: 2 };
const testReducer = (state = initialState, { type, payload }) => {
    if (type === "add") {
        const { key, value } = payload || {};

        return { ...state, [key]: value }
    }

    if (type === "remove") {
        // const newState = {...state};
        // delete newState[payload];

        return { ...state, [payload]: undefined };
    }

    if (type === "loading") {
        return { ...state, loading: payload }
    }

    return state;
}

const store = createStore(testReducer, composeWithDevTools(applyMiddleware(thunk)));

const Wrapper = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

const TestComponent = ({ test, onAdd, loading }) => {
    useEffect(() => {
        console.log('CHANGED:', loading);
    }, [loading]);

    if (loading) return "...";

    return <React.Fragment>
        <button onClick={() => onAdd("test", "MY VALUE")} >SEND MY VALUE</button>
        <span>{'TEST:' + test}</span>
    </React.Fragment>
}

TestComponent.displayName = "TestComponent_WITH_MY_NAME_WALTER_WHITE";

const commonAddAction = (key, value) => ({ type: 'add', payload: { key, value } });
const dispatchedOnAddAction = (key, value) => async dispatch => {
    //if (value === "MY VALUE") return dispatch({ type: 'add', payload: { key, value: "MY DEFAULT VALUE" } });

    dispatch({ type: 'loading', payload: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(commonAddAction(key, value));
    dispatch({ type: 'loading', payload: false });
    // setTimeout(() => {
    //     dispatch(commonAddAction(key, value));
    //     dispatch({ type: 'loading', payload: false });
    // }, 1000)
    // dispatch(commonAddAction(key, value === "MY VALUE" ? "MY DEFAULT VALUE" : value))
    //dispatch(commonAddAction(key, value))
}

const ConnectedComponent = connect(
    state => ({ test: state.test || "NO TEST", loading: state.loading }),
    dispatch => ({
        // onAdd: (key, value) => dispatch(commonAddAction(key, value)),
        onAdd: (key, value) => dispatch(dispatchedOnAddAction(key, value))
    })
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