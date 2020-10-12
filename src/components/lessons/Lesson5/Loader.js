// const action = {type: "", payload: ''};

// if (typeof action === "function"){
//     return action(dispatch, dasdsa)
// }

// const loadAction = data => async dispatch => {
//     const res = await fetch(data);

//     if (!res.ErrorCode){
//         dispatch(fetchSuccessfull(res))
//     }else{
//         dispatch(fetchError(res))
//     }
// }
import React, { useEffect, useRef } from 'react';

const TestLoad = ({ requestData, onSuccess, onError }) => {
    useEffect(() => {
        let ignore = false;
        const performLoad = async () => {
            try {
                const data = await (() => 'test')();

                if (!ignore) onSuccess && onSuccess(data);
            } catch (ex) {
                if (!ignore) onError && onError(ex);
            }
            finally {

            }
        }

        performLoad();

        return () => {
            ignore = true;
        }
    }, [requestData]);

    return null;
}

const UsageOfLoader = () => {
    const fetchId = useRef(0).current;

    return <TestLoad key={fetchId++} />
}

class Loader extends React.PureComponent {
    performLoad = () => {

    }

    handleLoad = () => {
        this.isLoadNeeded() && this.performLoad();
    }

    isLoadNeeded = () => {

    }

    render() {
        const { children } = this.props;
        return children ? children(this.performLoad, this.props, this) : null;
    }
}

export default Loader;