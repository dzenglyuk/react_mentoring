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
import React from 'react';

class Loader extends React.PureComponent {
    handleLoad() {

    }

    render() {
        const { children } = this.props;
        return children ? children(this.handleLoad, this.props, this) : null;
    }
}

export default Loader;