import React, { useEffect, useState, useCallback } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

// const processColumns = columns => {
//     applyMinWidth(columns);
//     calcColumnWidth(columns);
//     fixateColumns(columns); // columns.map(item => item.isFixed && isFiled)
// }

const PropTypesLesson = ({ numberProp, stringProp, customProp }) => 'PropTypesLesson';

PropTypesLesson.propTypes = {
    numberProp: PropTypes.number,
    stringProp: PropTypes.string.isRequired,
    customProp: (props, propName, componentName, test1, test2, ...rest) => {
        const propValue = (props || {})[propName];
        const isNotArray = value => !Array.isArray(value);
        // console.log(propValue);

        if (propValue === undefined) return new Error(`${propName} of component ${componentName} is required`);

        if (typeof propValue === 'string') return new Error(`${propName} of component ${componentName} can't be string type`);

        if (typeof propValue === 'function') return new Error(`${propName} of component ${componentName} can't be function type`);

        if (isNotArray(propValue)) return new Error(`${propName} of component ${componentName} must be array`);
        // console.log(props, propName, componentName, test1, test2, rest);
        return null;
    }
}

const DumbComponent = ({ data }) => {
    // const val = (value || defaultValue).toString()

    return <div>
        DATA
        {(data || []).map((item, index) => <div key={index}>{`${item}`}</div>)}
    </div>
}

const loadFuncDefault = () => ['FIRST', 'FIRSTER', 'SECOND'];

const Loader = ({ loadFunc, DisplayComponent, LoadingComponent }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const onLoad = () => {
            setLoading(false);
            setData(loadFunc());
        }
        setLoading(true);
        const timeoutId = setTimeout(onLoad, 1 * 1000);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [loadFunc]);

    if (loading) return <LoadingComponent />;

    return <DisplayComponent data={data} />
}
Loader.defaultProps = {
    loadFunc: loadFuncDefault,
    DisplayComponent: DumbComponent,
    // LoadingComponent: () => 'Loading....'
    LoadingComponent: Spin,
}

const Lesson2 = () => {
    const [counter, setCounter] = useState(0);
    const [loadCounter, setLoadCounter] = useState(0);
    const loadFunc = useCallback(() => ['DATA'], []);

    return <React.Fragment>
        {/* <PropTypesLesson stringProp={'test'} customProp={`IT'S ME MARIO!!!`} /> */}
        {/* <PropTypesLesson stringProp={'test'} customProp={100} /> */}
        {/* <PropTypesLesson stringProp={'test'} customProp={[]} /> */}

        {/* <button onClick={() => setCounter(counter + 1)}>CLICKED ME {counter} TIMES</button> */}
        <button onClick={() => setLoadCounter(loadCounter + 1)}>Load Data</button>
        <Loader key={loadCounter} loadFunc={loadFunc} />
    </React.Fragment>
}

export default Lesson2;