// 1. Lifting a state
// 2. Composition in depth
// 3. Smart / dumb components

import React, { useState } from 'react';

// // Smart components
// const ComponentOne_Counter = ({ defaultValue }) => {
//     const [value, setValue] = useState(defaultValue ?? 0);

//     return <div>
//         number of clicks: {value}
//         <button onClick={() => setValue(value => value + 1)} >CLICK</button>
//     </div>
// }

// const ComponentTwo_ResetCounter = ({ defaultValue }) => {
//     const [value, setValue] = useState(defaultValue ?? 0);

//     return <div>
//         number of clicks: {value}
//         <button onClick={() => setValue(value => value + 1)} >CLICK</button>
//         <button onClick={() => setValue(0)} >RESET</button>
//     </div>
// }

const LiftingStateComponent = ({ defaultValue }) => {
    const [value, setValue] = useState(defaultValue ?? "");

    return <div style={{ display: "flex" }}>
        <ComponentWithState value={value} onChange={(e) => setValue(e.target.value)} />
        <ResetButton onReset={() => setValue("")} />
    </div>
}

const ComponentWithState = ({ value, onChange, defaultValue, ...rest }) => {
    const [localValue, setValue] = useState(defaultValue ?? "");
    const thisValue = value ?? localValue;
    const handleChange = onChange ?? ((e) => setValue(e.target.value));

    return <ComponentWithoutState value={thisValue} onChange={handleChange} {...rest} />
}

ComponentWithState.propTypes = {
    value: (props, propName, componentName) => {
        const propValue = (props || {})[propName];
        const onChangePropValue = (props || {})["onChange"];

        if (propValue !== undefined && onChangePropValue === undefined) return new Error(`${propName} of component ${componentName} is set, but onChange is not. Component will be static`);
    },
    onChange: (props, propName, componentName) => {
        const propValue = (props || {})[propName];
        const valuePropValue = (props || {})["value"];

        if (propValue !== undefined && valuePropValue === undefined) return new Error(`${propName} of component ${componentName} is set, but value is not. Component will be static`);
    },
}

const ComponentWithoutState = ({ value, onChange }) => {
    return <div className='my-wrap'>
        <input value={value} onChange={onChange}></input>
    </div>
}

const ResetButton = ({ onReset }) => {
    return <button onClick={onReset} >RESET</button>
}

ComponentWithoutState.defaultProps = {
    value: ''
}

const Lesson4 = ({ }) => {
    return <React.Fragment>
        {/* <ComponentWithState /> */}
        <LiftingStateComponent />
        {/* <ComponentOne_Counter />
        <ComponentTwo_ResetCounter /> */}
        {/* <LiftingStateComponent /> */}
    </React.Fragment>
}

export default Lesson4;